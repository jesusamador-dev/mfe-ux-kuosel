import React from 'react';
import KSLButton from '@/components/atoms/KSLButton/KSLButton';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';

interface KSLButtonWithIconProps {
  text?: string;
  iconName: string;
  iconPosition?: 'left' | 'right';
  buttonType?: 'primary' | 'secondary' | 'transparent' | 'bordered';
  onClick?: () => void;
  disabled?: boolean;
}

const KSLButtonWithIcon: React.FC<KSLButtonWithIconProps> = ({
  text,
  iconName,
  iconPosition = 'left',
  buttonType = 'primary',
  onClick,
  disabled = false,
}) => {
  return (
    <KSLButton className={`button--${buttonType}`} onClick={onClick} disabled={disabled}>
      {iconPosition === 'left' && <KSLIcon name={iconName} className="button__icon" />}
      {text}
      {iconPosition === 'right' && <KSLIcon name={iconName} className="button__icon" />}
    </KSLButton>
  );
};

export default KSLButtonWithIcon;
