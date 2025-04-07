# backend/main.py
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/analyze")
async def analyze_image(file: UploadFile = File(...)):
    file_location = f"backend/uploads/{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    analysis_result = {
        "layout": "Centralized layout with efficient pathways.",
        "features": [
            "Efficient movement path",
            "Clear zone separation",
            "Minimalistic design with tasteful decoration",
        ],
    }
    return analysis_result
