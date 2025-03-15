
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Move, ZoomIn, Trash } from 'lucide-react';
import { toast } from 'sonner';

interface ImageUploaderProps {
  onImageSave?: (imageData: { url: string; width: number; position: { x: number; y: number }; page: string }) => void;
}

const AVAILABLE_PAGES = [
  { id: 'home', name: 'Home Page' },
  { id: 'about', name: 'About Section' },
  { id: 'resources', name: 'Resources Section' },
  { id: 'contact', name: 'Contact Section' }
];

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSave }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageWidth, setImageWidth] = useState(100); // percentage
  const [position, setPosition] = useState({ x: 50, y: 50 }); // percentage
  const [selectedPage, setSelectedPage] = useState('home');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result as string);
      toast.success('Image uploaded successfully');
    };
    reader.readAsDataURL(file);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if (!imageUrl) return;
    setDragging(true);
    e.preventDefault();
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (!dragging || !containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;
    
    // Constrain to container bounds
    const newX = Math.max(0, Math.min(100, x));
    const newY = Math.max(0, Math.min(100, y));
    
    setPosition({ x: newX, y: newY });
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleClear = () => {
    setImageUrl(null);
    setImageWidth(100);
    setPosition({ x: 50, y: 50 });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.info('Image removed');
  };

  const handleSave = () => {
    if (!imageUrl || !onImageSave) return;
    
    onImageSave({
      url: imageUrl,
      width: imageWidth,
      position,
      page: selectedPage
    });
    
    toast.success(`Image saved to ${AVAILABLE_PAGES.find(p => p.id === selectedPage)?.name}`);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Image Uploader
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Upload Controls */}
          <div>
            <Label htmlFor="image-upload">Upload Image</Label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="mt-1.5"
            />
          </div>

          {/* Page Selection */}
          <div className="space-y-2">
            <Label htmlFor="page-select">Select Page/Section</Label>
            <Select value={selectedPage} onValueChange={setSelectedPage}>
              <SelectTrigger id="page-select" className="w-full">
                <SelectValue placeholder="Select a page" />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_PAGES.map(page => (
                  <SelectItem key={page.id} value={page.id}>
                    {page.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Image Preview */}
          <div 
            ref={containerRef}
            className="relative h-[300px] bg-slate-100 rounded-md overflow-hidden border border-dashed border-slate-300"
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            {imageUrl ? (
              <div 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-move"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  width: `${imageWidth}%`,
                }}
                onMouseDown={handleDragStart}
              >
                <img 
                  src={imageUrl} 
                  alt="Uploaded" 
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400">
                <p>No image uploaded</p>
              </div>
            )}
          </div>

          {/* Size Controls */}
          {imageUrl && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="image-width" className="flex items-center gap-1.5">
                    <ZoomIn className="h-4 w-4" />
                    Image Size
                  </Label>
                  <span className="text-sm text-muted-foreground">{imageWidth}%</span>
                </div>
                <Slider 
                  id="image-width"
                  min={10} 
                  max={100} 
                  step={1}
                  value={[imageWidth]}
                  onValueChange={(values) => setImageWidth(values[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-1.5">
                    <Move className="h-4 w-4" />
                    Position
                  </Label>
                  <span className="text-sm text-muted-foreground">
                    X: {Math.round(position.x)}%, Y: {Math.round(position.y)}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Drag the image to reposition or use the preview area to place it.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleClear} 
          disabled={!imageUrl}
          className="flex items-center gap-1"
        >
          <Trash className="h-4 w-4" />
          Clear
        </Button>
        <Button 
          onClick={handleSave} 
          disabled={!imageUrl || !onImageSave}
        >
          Save Image
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ImageUploader;
