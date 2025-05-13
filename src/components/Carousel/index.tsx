import React, { useState, useEffect, useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose?: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, initialIndex = 0, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Đóng carousel khi nhấn Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Vô hiệu hóa scroll trên body khi carousel được mở
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  // Di chuyển đến hình ảnh trước đó
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  // Di chuyển đến hình ảnh tiếp theo
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Xử lý click bên ngoài để đóng carousel
  const handleClickOutside = (e: React.MouseEvent) => {
    if (carouselRef.current && !carouselRef.current.contains(e.target as Node)) {
      onClose?.();
    }
  };

  // Nếu không mở, không render gì cả
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={handleClickOutside}
    >
      <div 
        ref={carouselRef}
        className="relative bg-white max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng */}
        <button 
          className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Số thứ tự hình ảnh */}
        <div className="absolute top-4 left-4 z-10 bg-white/80 px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
        
        {/* Hình ảnh */}
        <div className="h-full flex items-center justify-center">
          <img 
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-full object-contain mx-auto"
          />
        </div>
        
        {/* Nút điều hướng */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            className="bg-white/30 hover:bg-white/50 p-2 rounded-full ml-2"
            onClick={goToPrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            className="bg-white/30 hover:bg-white/50 p-2 rounded-full mr-2"
            onClick={goToNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="absolute bottom-0 inset-x-0 bg-black/50 p-3 overflow-x-auto">
          <div className="flex gap-2 justify-center">
            {images.map((img, index) => (
              <div 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-12 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'}`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;