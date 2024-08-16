import React, { useState } from 'react';

interface KSLModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const KSLModal: React.FC<KSLModalProps> = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Tiempo debe coincidir con la duración de la animación
  };

  if (!isOpen) return null;

  return (
    <div className="ksl-modal__overlay">
      <div className={`ksl-modal__content ${isClosing ? 'ksl-modal__content--closing' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default KSLModal;
