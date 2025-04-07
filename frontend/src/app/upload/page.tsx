'use client';
import { useState } from 'react';
import { Upload, Image, X, Download, Loader2 } from 'lucide-react';
import Head from 'next/head';

export default function RemoveBackground() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setProcessedImage(null);
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBackground = async () => {
    if (!originalImage) return;
    
    setIsLoading(true);
    try {
      // Extract the base64 data from the data URL
      const base64Data = originalImage.split(',')[1];
      
      const response = await fetch('http://127.0.0.1:8000/remove-bg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Data }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to process image');
      }
      
      const data = await response.json();
      setProcessedImage(`data:image/png;base64,${data.image}`);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Failed to process image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `nobg-${fileName || 'image.png'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetImages = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setFileName('');
  };

  return (
    <>
      <Head>
        <title>Remove Image Background | Free Online Background Remover</title>
        <meta name="description" content="Remove background from images instantly with our free online tool. Get transparent backgrounds for your photos in seconds." />
        <meta name="keywords" content="background remover, remove background, transparent background, image editing" />
        <meta property="og:title" content="Remove Image Background | Free Online Background Remover" />
        <meta property="og:description" content="Remove background from images instantly with our free online tool." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remove Image Background | Free Online Background Remover" />
        <meta name="twitter:description" content="Remove background from images instantly with our free online tool." />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Remove Image Background</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload an image and we'll remove the background instantly.
            Get a transparent PNG in seconds.
          </p>
        </header>

        <main>
          {!originalImage ? (
            <div className="upload-container border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <div className="max-w-md mx-auto">
                <Upload className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-medium mb-2">Upload an image to remove the background</h3>
                <p className="text-gray-500 mb-6">Supports JPG, PNG files</p>
                
                <label className="block">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg cursor-pointer inline-block">
                    Upload Image
                    <input
                      type="file"
                      className="hidden"
                      accept="image/jpeg, image/png"
                      onChange={handleImageUpload}
                    />
                  </span>
                </label>
              </div>
            </div>
          ) : (
            <div className="processing-container">
              <div className="flex justify-end mb-4">
                <button 
                  className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
                  onClick={resetImages}
                >
                  <X size={18} /> Reset
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="original-image border rounded-xl overflow-hidden">
                  <div className="bg-gray-100 p-3 border-b">
                    <h3 className="font-medium">Original Image</h3>
                  </div>
                  <div className="p-4 flex justify-center bg-gray-50 h-80">
                    <img 
                      src={originalImage} 
                      alt="Original" 
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>

                <div className="result-image border rounded-xl overflow-hidden">
                  <div className="bg-gray-100 p-3 border-b">
                    <h3 className="font-medium">Result Image</h3>
                  </div>
                  <div className="p-4 flex justify-center items-center bg-gray-50 h-80">
                    {isLoading ? (
                      <div className="text-center">
                        <Loader2 className="h-10 w-10 animate-spin text-blue-600 mx-auto mb-4" />
                        <p>Processing image...</p>
                      </div>
                    ) : processedImage ? (
                      <img 
                        src={processedImage} 
                        alt="Processed" 
                        className="max-h-full object-contain"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <Image className="h-10 w-10 mx-auto mb-4" />
                        <p>Click "Remove Background" to see the result</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="actions mt-8 flex flex-col sm:flex-row justify-center gap-4">
                {!processedImage && !isLoading && (
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2"
                    onClick={removeBackground}
                  >
                    Remove Background
                  </button>
                )}

                {processedImage && (
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2"
                    onClick={handleDownload}
                  >
                    <Download size={20} /> Download Result
                  </button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}