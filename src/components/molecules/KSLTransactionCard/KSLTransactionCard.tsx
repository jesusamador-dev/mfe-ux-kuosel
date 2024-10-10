import React from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';

export interface KSLTransactionCardProps {
  categoryIcon: string;  // Icono de la categoría
  title: string;
  date: string;
  amount: string;
  change: string;
  isPositiveChange?: boolean;
}

const KSLTransactionCard: React.FC<KSLTransactionCardProps> = ({
  categoryIcon,
  title,
  date,
  amount,
  change,
  isPositiveChange = true,
}) => {
  return (
    <div className="ksl-transaction-card mb-4">
      <div className="ksl-transaction-card__icon">
        <KSLIcon name={categoryIcon} size="2rem" />
      </div>
      <div className="ksl-transaction-card__details">
        <h2 className="ksl-transaction-card__title">{title}</h2>
        <p className="ksl-transaction-card__date">{date}</p>
      </div>
      <div className="ksl-transaction-card__amount">
        <p className="ksl-transaction-card__amount-value">{amount}</p>
        <p className={`ksl-transaction-card__amount-change ${isPositiveChange ? 'ksl-transaction-card__amount-change--positive' : 'ksl-transaction-card__amount-change--negative'}`}>
          {change} <KSLIcon name={isPositiveChange ? 'arrow-up' : 'arrow-down'} />
        </p>
      </div>
    </div>
  );
};

export default KSLTransactionCard;
