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
  size?: string
}

const KSLButtonWithIcon: React.FC<KSLButtonWithIconProps> = ({
  text,
  iconName,
  iconPosition = 'left',
  buttonType = 'primary',
  onClick,
  size='1rem',
  disabled = false,
}) => {
  return (
    <KSLButton className={`button--${buttonType}`} onClick={onClick} disabled={disabled}>
      {iconPosition === 'left' && <KSLIcon size={size} name={iconName} className="button__icon" />}
      {text}
      {iconPosition === 'right' && <KSLIcon size={size} name={iconName} className="button__icon" />}
    </KSLButton>
  );
};

export default KSLButtonWithIcon;
