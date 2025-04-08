'use client';
import React, { useState } from 'react';
import { Upload, Image, X, Download, Loader2 } from 'lucide-react';

const SimpleUploader = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [originalFile, setOriginalFile] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setOriginalFile(file);
      setProcessedImage(null);
      setIsLoading(true);

      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setOriginalImage(e.target.result);
          removeBackground(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBackground = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://127.0.0.1:8000/remove-bg', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to process image');

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImage(imageUrl);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to process image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const originalBaseName = fileName.replace(/\.[^/.]+$/, '');
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `nobg-${originalBaseName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetImages = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setFileName('');
    setOriginalFile(null);
    if (processedImage && processedImage.startsWith('blob:')) {
      URL.revokeObjectURL(processedImage);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="max-w-3xl w-full">

        <header className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">Upload & Remove Image Background</h1>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Instant background removal – no sign-up needed.
          </p>
        </header>

        {!originalImage ? (
          <div className="border-2 border-gray-300 p-6 md:p-8 text-center rounded-xl">
            <Upload className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg md:text-xl font-medium mb-2">Upload an image to get started</h3>
            <p className="text-gray-500 mb-6">JPG or PNG formats supported</p>

            <label className="cursor-pointer inline-block">
              <span className="bg-[#7790ED] text-white font-medium py-2 md:py-3 px-8 rounded-md hover:bg-blue-600 transition-all">
                UPLOAD IMAGE
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        ) : (
          <div>
            <div className="flex justify-end mb-4">
              <button
                onClick={resetImages}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md border border-gray-300 transition-colors shadow-sm active:scale-95"
              >
                <X size={16} /> Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-xl overflow-hidden">
                <div className="p-2 md:p-3 border-b">
                  <h3 className="font-medium">Original</h3>
                </div>
                <div className="p-4 bg-gray-50 h-64 md:h-80 flex items-center justify-center">
                  <img src={originalImage} alt="Original" className="max-h-full object-contain" />
                </div>
              </div>

              <div className="border rounded-xl overflow-hidden">
                <div className="p-2 md:p-3 border-b">
                  <h3 className="font-medium">Without Background</h3>
                </div>
                <div className="p-4 bg-[#f0f0f0] h-64 md:h-80 flex items-center justify-center bg-opacity-50 bg-[linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc),linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]">
                  {isLoading ? (
                    <div className="text-center">
                      <Loader2 className="h-8 w-8 md:h-10 md:w-10 animate-spin text-blue-600 mx-auto mb-3" />
                      <p>Processing image...</p>
                    </div>
                  ) : processedImage ? (
                    <img src={processedImage} alt="Processed" className="max-h-full object-contain" />
                  ) : (
                    <div className="text-center text-gray-500">
                      <Image className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-3" />
                      <p>Waiting to process...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {processedImage && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleDownload}
                  className="bg-[#FF9D7E] text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-md flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Download HD Image
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleUploader;
