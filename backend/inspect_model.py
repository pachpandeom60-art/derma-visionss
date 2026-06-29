import tensorflow as tf

model_path = '../skin_b3_62percent.keras'
print("Loading model...")
model = tf.keras.models.load_model(model_path)
print("Model loaded successfully.")
print(f"Input shape: {model.input_shape}")
print(f"Output shape: {model.output_shape}")
