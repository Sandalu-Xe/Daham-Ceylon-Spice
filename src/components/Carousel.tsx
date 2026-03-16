import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface CarouselProps {
  items: any[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden w-full relative px-2 sm:px-12">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {items.map((p, i) => (
            <div 
              key={i} 
              className="shrink-0 px-2 sm:px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard 
                title={p.title}
                image={p.image}
                tag={p.tag}
                description={p.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-brand-dark/80 text-brand-dark dark:text-white shadow-md hover:bg-white dark:hover:bg-brand-dark transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100 disabled:opacity-0"
        onClick={prevSlide}
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-brand-dark/80 text-brand-dark dark:text-white shadow-md hover:bg-white dark:hover:bg-brand-dark transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100 disabled:opacity-0"
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-300 rounded-full ${
              index === currentIndex ? 'w-8 bg-brand-gold' : 'w-4 bg-brand-dark/20 dark:bg-white/20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
