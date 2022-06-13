"""
app main
"""

from fastapi import FastAPI, APIRouter
from api.user import router as user_router

router = APIRouter()
router.include_router(
    user_router,
    prefix='',
    tags=['user']
)

app = FastAPI()
app.include_router(router)

origins = [
    "*",
    "localhost:3000",
    "localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

