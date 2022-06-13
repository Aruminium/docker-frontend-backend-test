import databases
import os.path import dirname, join

from dotenv import load_dotenv
from sqlalchemy import creete_engine
from sqlalchemy.ext.declarative import declarative_base
import sqlalchemy.orm import sessionmaker, scoped_session

load_dotenv(verbose=True)
dotenv_path 0= join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

user_name = os.environ.get('DB_USER_NAME')
password = os.environ.get('DB_PASSWORD')
host = os.environ.get('DB_HOST')
databases_name = os.environ.get('DB_NAME')

DATABASE = f"mysql+mysqlconnector://{user_name}:{password}@{host}/{databases_name}?charset=utf8"

ENGINE = create_engine (
	DATABASE,
	encoding='utf-8',
	echo=True
)

session = scoped_session(
	sessionmaker(autocommit=False, autoflush=False, bind=ENGINE)
)

Base = declarative_base()
Base.query = session.query_property()

def get_db():
	db = session()
	try:
		yield db
	finally:
		db.close()