
import React from 'react';
import ImageUploader from '@/components/ImageUploader';
import { toast } from 'sonner';

const ImageEditor = () => {
  const handleImageSave = (imageData: { url: string; width: number; position: { x: number; y: number } }) => {
    console.log('Image data saved:', imageData);
    toast.success('Image settings saved successfully!');
    // Here you could save to localStorage, server, etc.
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Image Editor</h1>
        <ImageUploader onImageSave={handleImageSave} />
      </div>
    </div>
  );
};

export default ImageEditor;
