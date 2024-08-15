import React from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';

export interface KSLCategoryCardProps {
  category: string;
  amount: string;
  percentage: string;
}

const categoryStyles: Record<string, { backgroundColor: string; icon: string; textColor: string }> = {
  Housing: { backgroundColor: 'bg-housing', icon: 'home', textColor: 'text-white',},
  Food: { backgroundColor: 'bg-food', icon: 'home', textColor: 'text-white',},
  Saving: { backgroundColor: 'bg-saving', icon: 'home', textColor: 'text-black',},
};

const KSLCategoryCard: React.FC<KSLCategoryCardProps> = ({
  category,
  amount,
  percentage,
}) => {
  const [integerAmount, decimalAmount] = amount.split('.');
  const styles = categoryStyles[category];

  return (
    <div className={`ksl-category-card ${styles.backgroundColor}`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className={`${styles.textColor} text-lg font-semibold`}>{category}</h2>
      </div>
      <div className={`${styles.textColor} text-2xl font-bold relative`}>
        {integerAmount}
        {decimalAmount && (
          <span className="text-lg font-semibold align-bottom">.{decimalAmount}</span>
        )}
      </div>
      <div className={`${styles.textColor} ksl-category-card__percentage`}>
        <span>{percentage}</span>
      </div>
      <div className="ksl-category-card__icon">
        <KSLIcon name={styles.icon} size="1.5rem" className={styles.textColor} />
      </div>
    </div>
  );
};

export default KSLCategoryCard;
