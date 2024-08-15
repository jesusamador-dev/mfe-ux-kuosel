import React from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';

export interface KSLCircularCategoryCardProps {
  categoryIcon: string;
  categoryName: string;
}

const KSLCircularCategoryCard: React.FC<KSLCircularCategoryCardProps> = ({
  categoryIcon,
  categoryName,
}) => {
  return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-2 bg-white rounded-full w-[80px] h-[80px] shadow-md">
          <KSLIcon name={categoryIcon} size="2rem" className="text-primary" />
        </div>
        <p className="text-xs font-medium text-gray-800 text-center">{categoryName}</p>
      </div>
  );
};

export default KSLCircularCategoryCard;
