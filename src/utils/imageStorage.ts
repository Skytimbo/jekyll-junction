
interface ImageData {
  url: string;
  width: number;
  position: { x: number; y: number };
  page: string;
  id: string;
}

// Get all saved images
export const getSavedImages = (): ImageData[] => {
  const savedImagesJson = localStorage.getItem('savedImages');
  if (!savedImagesJson) return [];
  
  try {
    return JSON.parse(savedImagesJson);
  } catch (e) {
    console.error('Error parsing saved images', e);
    return [];
  }
};

// Get images for a specific page
export const getImagesForPage = (page: string): ImageData[] => {
  return getSavedImages().filter(img => img.page === page);
};

// Save a new image
export const saveImage = (imageData: Omit<ImageData, 'id'>): ImageData => {
  const savedImages = getSavedImages();
  const newImage = {
    ...imageData,
    id: `img_${Date.now()}` // Generate a unique ID
  };
  
  savedImages.push(newImage);
  localStorage.setItem('savedImages', JSON.stringify(savedImages));
  
  return newImage;
};

// Delete an image
export const deleteImage = (id: string): boolean => {
  const savedImages = getSavedImages();
  const filteredImages = savedImages.filter(img => img.id !== id);
  
  if (filteredImages.length !== savedImages.length) {
    localStorage.setItem('savedImages', JSON.stringify(filteredImages));
    return true;
  }
  
  return false;
};
