import { useEffect, useRef } from 'react';
import styles from './ModalCard.module.css';

export default function ModalCard({ title, children, onClose }) {
  const cardRef = useRef();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    function handleClickOutside(e) {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.card} ref={cardRef}>
        <h2>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
