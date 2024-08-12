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
    <div className="ksl-transaction-card flex items-center justify-between p-4 bg-white rounded-lg">
      <div className="ksl-transaction-card__icon bg-grayPrincipal p-3 rounded-lg">
        <KSLIcon name={categoryIcon} size="2rem" />
      </div>
      <div className="ksl-transaction-card__details flex-1 ml-4">
        <h2 className="ksl-transaction-card__title text-lg font-semibold">{title}</h2>
        <p className="ksl-transaction-card__date text-grayAAA text-md font-semibold">{date}</p>
      </div>
      <div className="ksl-transaction-card__amount text-right">
        <p className="ksl-transaction-card__amount-value text-lg font-semibold">{amount}</p>
        <p className={`ksl-transaction-card__change ${isPositiveChange ? 'text-green-500' : 'text-red-500'} flex text-md items-center`}>
          {change} <KSLIcon name={isPositiveChange ? 'arrow-up' : 'arrow-down'} />
        </p>
      </div>
    </div>
  );
};

export default KSLTransactionCard;
