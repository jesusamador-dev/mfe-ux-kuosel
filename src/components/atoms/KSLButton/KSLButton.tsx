import React from 'react';

export interface KSLButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const KSLButton: React.FC<KSLButtonProps> = ({ children, onClick, className = '', disabled = false }) => {
  const buttonClass = `${className} ${disabled ? 'button--disabled' : ''}`;
  
  return (
    <button className={`button ${buttonClass}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default KSLButton;
