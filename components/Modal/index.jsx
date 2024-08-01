import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

/**
 * Modal component
 */

export const Modal = ({ active, setActive, children, showCloseButton, title, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [setActive, isMounted]);

  const handleWrapperClick = () => {
    closeModal();
  };

  const handleWrapperKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      closeModal();
    }
  };

  const closeModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
    setActive(false);
  }, [onClose, setActive]);

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleContainerKeyDown = (e) => {
    e.stopPropagation();
  };

  if (!isMounted) {
    return null; // Return null during server-side rendering and until the component is mounted on the client
  }

  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <div role="button" aria-modal="true" className={`${styles.wrapper} ${active ? styles.active : styles.inactive}`} onClick={handleWrapperClick} onKeyDown={handleWrapperKeyDown} tabIndex={0}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div className={styles.container} onClick={handleContainerClick} onKeyDown={handleContainerKeyDown} role="document">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
