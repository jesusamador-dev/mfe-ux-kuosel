import React, { useState } from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';

export interface KSLPasswordInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const KSLPasswordInput: React.FC<KSLPasswordInputProps> = ({ 
  label, 
  value, 
  placeholder, 
  onChange, 
  error 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="ksl-password-input">
      <label className="ksl-password-input__label">{label}</label>
      <div className={`ksl-password-input__wrapper ${error ? 'ksl-password-input__wrapper--error' : ''}`}>
        <KSLIcon name="lock" size="1rem" className="ksl-password-input__icon" />
        <input 
          type={showPassword ? 'text' : 'password'} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          className="ksl-password-input__field"
        />
        <button 
          type="button" 
          onClick={() => setShowPassword(!showPassword)} 
          className="ksl-password-input__toggle"
        >
          <KSLIcon name={showPassword ? 'eye-off' : 'eye'} size="1rem" className="ksl-password-input__toggle-icon" />
        </button>
      </div>
      {error && <p className="ksl-password-input__error">{error}</p>}
    </div>
  );
};

export default KSLPasswordInput;
