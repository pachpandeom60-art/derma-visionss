import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np

tf_available = False
try:
    import tensorflow as tf
    tf_available = True
except ImportError:
    print("TensorFlow not installed. Running in mock mode.")


CORS(app)

MODEL_PATH = '../skin_b3_62percent.keras'
model = None

# Assuming the 6 classes based on standard HAM10000 classes (dropping Vascular lesions as a guess)
CLASSES = ['Actinic keratoses', 'Basal cell carcinoma', 'Benign keratosis-like lesions', 
           'Dermatofibroma', 'Melanocytic nevi', 'Melanoma']

if tf_available:
    try:
        print(f"Loading model from {MODEL_PATH}...")
        model = tf.keras.models.load_model(MODEL_PATH)
        print("Model loaded successfully!")
        print(f"Input shape: {model.input_shape}")
        print(f"Output shape: {model.output_shape}")
    except Exception as e:
        print(f"Error loading model: {e}")

# Health check route
@app.route('/')
def home():
    return jsonify({
        "status": "Backend is running",
        "endpoint": "/predict"
    })

@app.route('/predict', methods=['POST'])
def predict():

    if 'image' not in request.files:
        return jsonify({"error": "No image provided."}), 400

    if not tf_available or model is None:
        # MOCK MODE
        import random
        predicted_class = random.choice(CLASSES)
        confidence = random.uniform(0.6, 0.99)
        severity = "High" if confidence > 0.8 and ("carcinoma" in predicted_class.lower() or "melanoma" in predicted_class.lower()) else "Moderate"
        
        probs = []
        for c in CLASSES:
            if c == predicted_class:
                probs.append({"class": c, "prob": confidence})
            else:
                probs.append({"class": c, "prob": (1.0 - confidence) / (len(CLASSES)-1)})
        probs.sort(key=lambda x: x['prob'], reverse=True)

        return jsonify({
            "predicted_class": predicted_class,
            "confidence": confidence,
            "severity": severity,
            "probabilities": probs[:3],
            "mock": True
        })

    try:
        file = request.files['image']
        image = Image.open(file.stream).convert('RGB')
        
        # Determine expected input size from model
        input_shape = model.input_shape
        target_size = (224, 224) # default
        if len(input_shape) == 4 and input_shape[1] is not None:
            target_size = (input_shape[1], input_shape[2])

        image = image.resize(target_size)
        img_array = np.array(image, dtype=np.float32)
        
        # Note: If the model requires specific preprocessing (e.g., /255.0), it should be applied here.
        # Assuming the model has a built-in rescaling layer since it's a newer .keras file.
        img_array = np.expand_dims(img_array, axis=0)

        preds = model.predict(img_array)[0]
        
        # generate class labels dynamically if our default list length doesn't match
        class_labels = CLASSES
        if len(preds) != len(CLASSES):
            class_labels = [f"Disease {i+1}" for i in range(len(preds))]

        # Get top 3 predictions
        top_indices = np.argsort(preds)[::-1][:3]
        
        probabilities = [
            {"class": class_labels[i], "prob": float(preds[i])} for i in top_indices
        ]
        
        predicted_class = probabilities[0]['class']
        confidence = probabilities[0]['prob']
        
        # Calculate a basic severity based on name and confidence
        severity = "High" if confidence > 0.7 and ("carcinoma" in predicted_class.lower() or "melanoma" in predicted_class.lower()) else "Moderate"
        if confidence < 0.4:
            severity = "Low"

        return jsonify({
            "predicted_class": predicted_class,
            "confidence": confidence,
            "severity": severity,
            "probabilities": probabilities
        })

    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
