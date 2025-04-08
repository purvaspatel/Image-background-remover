'use client';
import React, { useState } from 'react';
import { Upload, Image, X, Download, Loader2 } from 'lucide-react';

const General = () => {
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
            setIsLoading(true); // Start loading state immediately on upload

            // Create preview of original image
            const reader = new FileReader();
            reader.onload = (e) => {
                if (typeof e.target?.result === 'string') {
                    setOriginalImage(e.target.result);
                    // Automatically start processing the image
                    removeBackground(file);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const removeBackground = async (file: File) => {
        try {
            // Create FormData object and append the file
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('http://127.0.0.1:8000/remove-bg', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to process image');
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setProcessedImage(imageUrl);
        } catch (error) {
            console.error('Error removing background:', error);
            alert('Failed to process image. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (!processedImage) return;
    
        const originalBaseName = fileName.replace(/\.[^/.]+$/, ""); // remove original extension
        const link = document.createElement('a');
        link.href = processedImage;
        link.download = `nobg-${originalBaseName}.png`; // force .png extension
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
        <section className="w-full min-h-screen flex overflow-hidden">

            {/* Left Block - Blue Panel with Collage - Hidden on mobile */}
            <div className="w-[300px] bg-[#7790ED] hidden md:flex relative">
                {/* Custom styled image that starts from baseline and is right-shifted */}
                <div className="image-container">
                    <img
                        src="/assets/main3.png"
                        alt="Collage Illustration"
                        className="custom-image"
                    />
                </div>

                {/* Custom CSS for image positioning */}
                <style jsx>{`
          .image-container {
            position: absolute;
            bottom: 0;
            right: -280px;
            width: 200%;
            display: flex;
            justify-content: flex-end;
            z-index: 10;
          }
          
          .custom-image {
            width: 100%;
            max-width: none;
            height: auto;
            transform: translateX(20px);
          }
        `}</style>
            </div>

            {/* Right Block - Content Area with Background Removal */}
            <div className="flex-1 bg-white flex items-start justify-center pt-8 md:pt-6">
                <div className="max-w-4xl w-full p-4 md:p-8">
                    <header className="mb-8 text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-3">100% FREE HD BACKGROUND REMOVER</h1>
                        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Remove background from any image, download hd images unlimited times.
                        </p>
                    </header>

                    <main>
                        {!originalImage ? (
                            <div className="upload-container border-2  border-gray-300 p-6 md:p-8 text-center">
                                <div className="max-w-md mx-auto">
                                    <Upload className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-gray-400" />
                                    <h3 className="text-lg md:text-xl font-medium mb-2">Upload an image to remove the background</h3>
                                    <p className="text-gray-500 mb-6">Supports JPG, PNG files</p>

                                    <label className="block">
                                        <span className="bg-[#7790ED]  text-white font-medium py-2 md:py-3 px-5 md:px-20 rounded-[2] cursor-pointer inline-block">
                                            UPLOAD IMAGE
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
                                        onClick={resetImages}
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md border border-gray-300 transition-colors duration-200 shadow-sm active:scale-95"
                                        style={{
                                            backgroundColor: '#f9f9f9',
                                        }}
                                    >
                                        <X size={16} />
                                        Reset
                                    </button>
                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
                                    <div className="original-image border rounded-xl overflow-hidden">
                                        <div className=" p-2 md:p-3 border-b">
                                            <h3 className="font-medium">Original Image</h3>
                                        </div>
                                        <div className="p-4 flex justify-center bg-gray-50 h-64 md:h-80">
                                            <img
                                                src={originalImage}
                                                alt="Original"
                                                className="max-h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="result-image border rounded-xl overflow-hidden">
                                        <div className="p-2 md:p-3 border-b">
                                            <h3 className="font-medium">Result Image</h3>
                                        </div>
                                        <div className="p-4 flex justify-center items-center bg-[#f0f0f0] bg-opacity-50 bg-[linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc),linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] h-64 md:h-80">
                                            {isLoading ? (
                                                <div className="text-center">
                                                    <Loader2 className="h-8 w-8 md:h-10 md:w-10 animate-spin text-blue-600 mx-auto mb-3" />
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
                                                    <Image className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-3" />
                                                    <p>Processing will start automatically</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="actions mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                    {processedImage && (
                                        <button
                                            className="bg-[#FF9D7E] text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-[2] flex items-center justify-center gap-2"
                                            onClick={handleDownload}
                                        >
                                            <Download size={18} /> Download HD Image
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>

        </section>
    );
};

export default General;