import { useEffect, useRef } from 'react';
import styles from './ModalCard.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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
        <div className={styles.cardTitle}>
          <h2>{title}</h2>
          <button
            className={styles.iconButton}
            type="button"
            onClick={onClose}
          >
            <KeyboardDoubleArrowDownIcon fontSize='medium' />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
