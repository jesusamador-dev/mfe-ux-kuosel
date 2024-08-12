import React from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';
import { NavLink } from 'react-router-dom';

interface KSLBottomNavbarLink {
  name: string;
  icon: string;
  path: string;
  isSpecial?: boolean;
}

interface KSLBottomNavbarProps {
  links: KSLBottomNavbarLink[];
  showName?: boolean;
}

const KSLBottomNavbar: React.FC<KSLBottomNavbarProps> = ({ links, showName = true }) => {
  return (
    <nav className="ksl-bottom-navbar">
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `link ${isActive && !link.isSpecial ? 'link--active' : ''}`
          }
        >
          {({ isActive }: { isActive: boolean }) => (
            <>
              <div className={`flex items-center justify-center ${link.isSpecial ? 'link__special' : ''}`}>
                <KSLIcon
                  name={link.icon}
                  size={link.isSpecial ? '1.5rem' : '1rem'}
                  className={link.isSpecial ? '' : isActive ? 'link__icon--active' : 'link__icon--inactive'}
                />
              </div>
              {showName && !link.isSpecial && (
                <span className={`link__name ${isActive ? 'link__icon--active' : ''}`}>
                  {link.name}
                </span>
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default KSLBottomNavbar;
