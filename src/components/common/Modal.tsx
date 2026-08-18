import React from 'react';
import { ModalOverlay, ModalContainer, ModalContent, ModalButtonWrapper, ModalButton } from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
  onCancel?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose, confirmText = '확인', cancelText, onCancel }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onCancel || onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>{message}</ModalContent>
        <ModalButtonWrapper>
          {cancelText && (
            <ModalButton onClick={onCancel} style={{ borderRight: '1px solid #eee' }}>
              {cancelText}
            </ModalButton>
          )}
          <ModalButton onClick={onClose} style={{ fontWeight: cancelText ? 600 : 500 }}>
            {confirmText}
          </ModalButton>
        </ModalButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
