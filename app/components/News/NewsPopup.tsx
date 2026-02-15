'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Download } from 'lucide-react';

interface NewsPopupProps {
  images: string[];
  open?: boolean;
  onClose?: () => void;
}

// Singleton flag to show popup only once per session
let hasNewsPopupShown = false;

const NewsPopup: React.FC<NewsPopupProps> = ({ images, open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const showPopup = () => {
    setIsOpen(true);
    hasNewsPopupShown = true;
  };

  useEffect(() => {
    if (!hasNewsPopupShown && images.length > 0) {
      showPopup();
    }
  }, [images]);

  useEffect(() => {
    if (open) showPopup();
  }, [open]);

  const closePopup = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // 🔽 Download current image
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = images[currentImage];
    link.download = images[currentImage].split('/').pop() || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, currentImage]);

  // Touch swipe
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative flex items-center justify-center w-full h-full max-h-[95vh] max-w-[95vw]">
            {/* Main Image */}
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`News Image ${currentImage + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
              {currentImage + 1} / {images.length}
            </div>

            {/* Download Button */}
            <button
  onClick={downloadImage}
  className="absolute top-4 left-4 bg-black/70 p-3 rounded-full text-white hover:text-green-500 transition-colors"
>
  <Download size={22} />
</button>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-black/70 p-3 rounded-full text-white hover:text-red-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full text-white hover:text-red-600 transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full text-white hover:text-red-600 transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsPopup;
