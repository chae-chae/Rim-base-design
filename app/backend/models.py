# backend/models.py
from sqlalchemy import Column, Integer, String, Text
from backend.database import Base

class UserBaseDesign(Base):
    __tablename__ = "user_designs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    design_data = Column(Text)  # JSON 문자열 또는 구조화된 데이터를 저장
