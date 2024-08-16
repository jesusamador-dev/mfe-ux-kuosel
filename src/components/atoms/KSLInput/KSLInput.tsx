import React from 'react';
import KSLIcon from '@/components/atoms/KSLIcon/KSLIcon';

export interface KSLInputProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  icon: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const KSLInput: React.FC<KSLInputProps> = ({ 
  label, 
  type = 'text', 
  value, 
  placeholder, 
  icon, 
  onChange, 
  error 
}) => {
  return (
    <div className="ksl-input">
      <label className="ksl-input__label">{label}</label>
      <div className={`ksl-input__wrapper ${error ? 'ksl-input__wrapper--error' : ''}`}>
        <KSLIcon name={icon} size="1rem" className="ksl-input__icon" />
        <input 
          type={type} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          className="ksl-input__field"
        />
      </div>
      {error && <p className="ksl-input__error">{error}</p>}
    </div>
  );
};

export default KSLInput;
