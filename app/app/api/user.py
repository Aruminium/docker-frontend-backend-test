from typing import List

from fastapi import Depends, APIRouter, HTTPException
from sqlalchemy.orm import Session

import cruds
from db import get_db
from schemas.user import User, UserCreate, UserUpdate

router = APIRouter()

@router.get('/users/{user_id}', response_model=User)
def read_user(user_id: int, db: Session = Depends(get_db)):
	db_user = cruds.get_db(db, user_id=user_id)
	if not db_user:
		raise HTTPException(status_code=404, detail="User not found")
	return db_user

@router.get('/users', response_model=User)
def read_users(limit: int = 100, db: Session = Depends(get_db)):
	users = cruds.get_users(db, limit=limit)
	return users

@router.post('/users', response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
	return cruds.create_user(db=db, user=user)

@router.put('/users/{user_id}', response_model=User)
def update_user(user_id: int, user: UserUpdate, db: Session = Depends(get_db)):
	return cruds.update_user(db=db, user_id=user_id, user=user)

@router.delete('/users/{user_id}')
def delete_user(user_id: int, db: Session = Depends(get_db)):
	cruds.delete_user(db=db, user_id=user_id)