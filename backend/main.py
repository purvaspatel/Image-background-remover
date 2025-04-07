# backend/main.py

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from rembg import remove
from PIL import Image, UnidentifiedImageError
import io
import os
from datetime import datetime
import logging

# Setup logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

app = FastAPI(title="Background Remover API", version="1.0")

# CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/upload","http://localhost:3000/","http://localhost:3000"],  # TODO: Replace * with frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create static directory if not exists
os.makedirs("static", exist_ok=True)


@app.post("/remove-bg", response_class=FileResponse)
async def remove_background(file: UploadFile = File(...)):
    try:
        # Validate file type
        if not file.content_type.startswith("image/"):
            logging.warning(f"Rejected upload: {file.filename} is not an image.")
            raise HTTPException(status_code=400, detail="Only image files are allowed.")

        input_data = await file.read()

        # Validate if the image can be opened
        try:
            Image.open(io.BytesIO(input_data))
        except UnidentifiedImageError:
            logging.error(f"Unidentified image format: {file.filename}")
            raise HTTPException(status_code=422, detail="Invalid image format.")

        # Remove background
        output_data = remove(input_data)

        # Generate unique filename
        filename = f"bg_removed_{datetime.now().strftime('%Y%m%d%H%M%S')}.png"
        output_path = os.path.join("static", filename)

        # Save image
        with open(output_path, "wb") as f:
            f.write(output_data)

        logging.info(f"Processed image saved as: {filename}")

        return FileResponse(
            output_path,
            media_type="image/png",
            filename=filename,
        )

    except HTTPException as e:
        raise e  # re-raise known HTTP exceptions

    except Exception as e:
        logging.exception("Unexpected error occurred during background removal.")
        raise HTTPException(status_code=500, detail="Internal server error.")
