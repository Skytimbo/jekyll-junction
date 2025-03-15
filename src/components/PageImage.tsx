
import React from 'react';
import { getImagesForPage } from '@/utils/imageStorage';

interface PageImageProps {
  pageId: string;
}

const PageImage: React.FC<PageImageProps> = ({ pageId }) => {
  const images = getImagesForPage(pageId);
  
  if (images.length === 0) {
    return null;
  }

  return (
    <>
      {images.map(image => (
        <div 
          key={image.id}
          className="absolute"
          style={{
            left: `${image.position.x}%`,
            top: `${image.position.y}%`,
            width: `${image.width}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            pointerEvents: 'none', // Make sure images don't interfere with clicking
          }}
        >
          <img 
            src={image.url} 
            alt="Page decoration" 
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default PageImage;
