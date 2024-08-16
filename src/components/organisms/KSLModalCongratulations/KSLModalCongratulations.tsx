import React, { useState, useEffect } from "react";
import KSLModal from "@/components/atoms/KSLModal/KSLModal";
import KSLButton from "@/components/atoms/KSLButton/KSLButton";
import KSLIcon from "@/components/atoms/KSLIcon/KSLIcon";

interface KSLModalCongratulationsProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
}

const KSLModalCongratulations: React.FC<KSLModalCongratulationsProps> = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText,
}) => {
  return (
    <KSLModal isOpen={isOpen} onClose={onClose}>
      <div className="ksl-modal__icon">
        <KSLIcon name="congratulations" size="8rem" color={""} />
      </div>
      <h2 className="ksl-modal__title">{title}</h2>
      <p className="ksl-modal__message">{message}</p>
      <KSLButton className="ksl-modal__button" onClick={onClose}>
        {buttonText}
      </KSLButton>
    </KSLModal>
  );
};

export default KSLModalCongratulations;
