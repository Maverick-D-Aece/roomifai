from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Dimensions(BaseModel):
    width: float
    length: float
    height: float

@app.post("/extract-dimensions", response_model=Dimensions)
async def extract_dimensions(file: UploadFile = File(...)):
    # TODO: Save file, run OpenCV logic to estimate dimensions
    # For MVP, return stubbed values
    return Dimensions(width=4.5, length=6.0, height=2.7)