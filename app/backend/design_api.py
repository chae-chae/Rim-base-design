# backend/design_api.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend import models, database
import json

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/api/design")
def save_design(user_id: int, design: dict, db: Session = Depends(get_db)):
    design_str = json.dumps(design)
    new_design = models.UserBaseDesign(user_id=user_id, design_data=design_str)
    db.add(new_design)
    db.commit()
    db.refresh(new_design)
    return new_design

@router.get("/api/design/{user_id}")
def get_design(user_id: int, db: Session = Depends(get_db)):
    design = db.query(models.UserBaseDesign).filter(models.UserBaseDesign.user_id == user_id).first()
    if design:
        return json.loads(design.design_data)
    return {"message": "No design found"}
