import React from 'react';
import KSLButtonWithIcon from '@/components/molecules/KSLButtonWithIcon/KSLButtonWithIcon';

export interface KSLTopBarProps {
  title: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const KSLTopBar: React.FC<KSLTopBarProps> = ({
  title,
  onLeftClick,
  onRightClick,
}) => {
  return (
    <div className="ksl-topbar">
      <div className='ksl-topbar__button'>
        <KSLButtonWithIcon iconName='arrow-left' buttonType='bordered' onClick={onLeftClick} />
      </div>
      <h1 className="ksl-topbar__title text-lg font-semibold">{title}</h1>
      <div className='ksl-topbar__button'>
        <KSLButtonWithIcon iconName='notification-active' buttonType='bordered' size='1.2rem' onClick={onRightClick} />
      </div>
    </div>
  );
};

export default KSLTopBar;
