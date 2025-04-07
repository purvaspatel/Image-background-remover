import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // The request from the frontend should contain FormData with a file
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Create a new FormData to send to the backend
    const backendFormData = new FormData();
    backendFormData.append('file', file);

    // Forward the request to the FastAPI backend
    const response = await fetch('http://127.0.0.1:8000/remove-bg', {
      method: 'POST',
      body: backendFormData,
    });

    if (!response.ok) {
      // Try to get detailed error if available
      let errorDetail = 'Backend processing failed';
      try {
        const errorData = await response.json();
        errorDetail = errorData.detail || errorDetail;
      } catch {
        // If error response is not JSON, just use the status text
        errorDetail = response.statusText;
      }
      
      return NextResponse.json(
        { error: errorDetail },
        { status: response.status }
      );
    }

    // The response from the FastAPI is a file, so we need to stream it back
    const blobData = await response.blob();
    
    // Return the processed image as a blob
    return new NextResponse(blobData, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename="removed_bg.png"',
      },
    });
  } catch (error) {
    console.error('Error in background removal API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}