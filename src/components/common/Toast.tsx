import React, { useEffect, useState } from 'react';
import { ToastContainer, ToastIcon, ToastMessage } from './Toast.styles';

interface ToastProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ isOpen, message, onClose }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLeaving(false);
      const leaveTimer = setTimeout(() => {
        setIsLeaving(true);
      }, 1700);

      const closeTimer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => {
        clearTimeout(leaveTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ToastContainer $isLeaving={isLeaving}>
      <ToastIcon>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </ToastIcon>
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
};

export default Toast;
