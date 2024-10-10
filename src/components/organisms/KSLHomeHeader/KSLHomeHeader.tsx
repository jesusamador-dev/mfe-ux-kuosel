import React from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';
import { Link } from 'react-router-dom';

const KSLHomeHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="ml-2">
          <h1 className="text-xl font-bold">Hello Mahmud</h1>
          <p className="text-sm text-gray-500">Welcome Back!</p>
        </div>
      </div>
      <div className="flex items-center">
        <Link to="/notifications" className='bg-white rounded-full p-2 flex align-items-center justify-content-center'>
          <KSLIcon name="notification" size="1.2rem"/>
        </Link>
      </div>
    </header>
  );
};

export default KSLHomeHeader;
