# backend/main.py
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input, decode_predictions
from tensorflow.keras.preprocessing import image
import numpy as np
import io
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.applications.MobileNetV2(weights="imagenet")

upload_folder = "backend/uploads"
os.makedirs(upload_folder, exist_ok=True)

@app.post("/api/analyze")
async def analyze_image(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        
        file_path = os.path.join(upload_folder, file.filename)
        with open(file_path, "wb") as f:
            f.write(contents)
        
        img = image.load_img(io.BytesIO(contents), target_size=(224, 224))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)
        
        preds = model.predict(x)
        decoded = decode_predictions(preds, top=3)[0]
        features = [f"{desc}: {round(prob, 2)}" for (_, desc, prob) in decoded]
        
        result = {
            "layout": "Preliminary layout based on image classification.",
            "features": features,
        }
        return JSONResponse(content=result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
