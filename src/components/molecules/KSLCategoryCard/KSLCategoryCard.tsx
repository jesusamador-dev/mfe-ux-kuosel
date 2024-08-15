import React from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';

export interface KSLCategoryCardProps {
  category: string;
  amount: string;
  percentage: string;
}

const categoryStyles: Record<string, { backgroundColor: string; icon: string; textColor: string }> = {
  housing: { backgroundColor: 'bg-housing', icon: 'house', textColor: 'text-white',},
  food: { backgroundColor: 'bg-food', icon: 'house', textColor: 'text-white',},
  saving: { backgroundColor: 'bg-saving', icon: 'house', textColor: 'text-black',},
};

const KSLCategoryCard: React.FC<KSLCategoryCardProps> = ({
  category,
  amount,
  percentage,
}) => {
  const [integerAmount, decimalAmount] = amount.split('.');
  const styles = categoryStyles[category];

  return (
    <div className={`ksl-category-card p-4 rounded-15px ${styles.backgroundColor}`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className={`${styles.textColor} text-lg font-semibold`}>{category}</h2>
      </div>
      <div className={`${styles.textColor} text-2xl font-bold relative`}>
        {integerAmount}
        {decimalAmount && (
          <span className="text-lg font-semibold align-bottom">.{decimalAmount}</span>
        )}
      </div>
      <div className={`${styles.textColor} text-sm mt-2`}>
        <span className="percentage-box bg-white bg-opacity-20 rounded px-2 py-1">{percentage}</span>
      </div>
      <div className="absolute bottom-2 right-2 opacity-20">
        <KSLIcon name={styles.icon} size="1.5rem" className="text-white" />
      </div>
    </div>
  );
};

export default KSLCategoryCard;
