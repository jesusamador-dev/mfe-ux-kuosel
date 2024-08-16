import React from 'react';
import KSLCategoryCard, { KSLCategoryCardProps } from '@/components/molecules/KSLCategoryCard/KSLCategoryCard';
import KSLButton from '@/components/atoms/KSLButton/KSLButton';

export interface KSLCategoryCarouselProps {
  categories: KSLCategoryCardProps[];
  onAddCategory: () => void;
}

const KSLCategoryCarousel: React.FC<KSLCategoryCarouselProps> = ({ categories, onAddCategory }) => {
  return (
    <div className="ksl-category-carousel flex items-stretch space-x-4 py-4 overflow-x-auto no-scrollbar touch-pan-x">
      {/* Botón fijo para agregar categorías */}
      <div className="flex-shrink-0">
        <KSLButton 
          className="button--primary w-[60px] button--full-height"
          onClick={onAddCategory}
        >
          +
        </KSLButton>
      </div>

      {/* Carrusel de categorías */}
      <div className="flex space-x-4 pr-4">
        {categories.map((category, index) => (
          <KSLCategoryCard 
            key={index} 
            category={category.category} 
            amount={category.amount} 
            percentage={category.percentage} 
          />
        ))}
      </div>
    </div>
  );
};

export default KSLCategoryCarousel;
