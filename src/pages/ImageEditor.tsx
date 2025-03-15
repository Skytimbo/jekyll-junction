
import React, { useState, useEffect } from 'react';
import ImageUploader from '@/components/ImageUploader';
import { toast } from 'sonner';
import { saveImage, getSavedImages, deleteImage } from '@/utils/imageStorage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash, Image, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const ImageEditor = () => {
  const [savedImages, setSavedImages] = useState<ReturnType<typeof getSavedImages>>([]);
  
  useEffect(() => {
    // Load saved images on component mount
    setSavedImages(getSavedImages());
  }, []);
  
  const handleImageSave = (imageData: { url: string; width: number; position: { x: number; y: number }; page: string }) => {
    const savedImage = saveImage(imageData);
    setSavedImages(prev => [...prev, savedImage]);
    toast.success('Image saved successfully!');
  };
  
  const handleImageDelete = (id: string) => {
    if (deleteImage(id)) {
      setSavedImages(prev => prev.filter(img => img.id !== id));
      toast.success('Image deleted!');
    }
  };
  
  // Map of page IDs to readable names
  const pageNames: Record<string, string> = {
    'home': 'Home Page',
    'about': 'About Section',
    'resources': 'Resources Section',
    'contact': 'Contact Section'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-center">Image Manager</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ImageUploader onImageSave={handleImageSave} />
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Saved Images
                </CardTitle>
              </CardHeader>
              <CardContent>
                {savedImages.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No images saved yet. Upload and save an image to see it here.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {savedImages.map(image => (
                      <div key={image.id} className="flex items-center gap-4 p-3 border rounded-md">
                        <div className="w-16 h-16 shrink-0 bg-slate-100 rounded overflow-hidden">
                          <img 
                            src={image.url} 
                            alt="Saved" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">
                            {pageNames[image.page] || image.page}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Size: {image.width}% • 
                            Position: X: {Math.round(image.position.x)}%, Y: {Math.round(image.position.y)}%
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleImageDelete(image.id)}
                          className="shrink-0"
                        >
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
              <h3 className="font-medium text-amber-800 mb-2">How to use images on your site</h3>
              <p className="text-sm text-amber-700">
                Images are saved to your browser's local storage. After saving, they will 
                automatically appear on the selected page when you visit it. You can modify 
                or remove images anytime from this screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
