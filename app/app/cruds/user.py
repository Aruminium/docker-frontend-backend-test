from sqlalchemy.orm import Session

from models import User
from schemas import UserCreate, UserUpdate

def get_user(db: Session, user_id: int):
	return db.query(User).filter(User.id == user_id).first()

def get_users(db: Session, limit: int = 100):
	return db.query(User).limit(limit).all()

def create_user(db: Session, user: UserCreate):
	db_user = User(name=user.name, age=user.age)
	db.add(db_user)
	db.commit()
	db.refresh(db_user)
	return db_user

def update_user(db: Session, user_id: int, user: UserUpdate):
	db_user = db.query(User).filter(User.id == user_id).first()
	db_user.name = user.name
	db_user.age = user.age
	db.commit()
	return db_user