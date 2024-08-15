import React from 'react';
import KSLCategoryCard, { KSLCategoryCardProps } from '@/components/molecules/KSLCategoryCard/KSLCategoryCard';
import KSLButton from '@/components/atoms/KSLButton/KSLButton';

interface KSLCategoryCarouselProps {
  categories: KSLCategoryCardProps[];
  onAddCategory: () => void;
}

const KSLCategoryCarousel: React.FC<KSLCategoryCarouselProps> = ({ categories, onAddCategory }) => {
  return (
    <div className="ksl-category-carousel flex items-center space-x-4 py-4 overflow-x-auto no-scrollbar">
      {/* Botón fijo para agregar categorías */}
      <KSLButton 
        className="button--primary w-[60px]  flex-shrink-0"
        onClick={onAddCategory}
      >
        +
      </KSLButton>

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
