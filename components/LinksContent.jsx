import styles from './Section.module.css';

export default function LinksContent() {
  return (
    <div className={styles.section}>
      <ul>
        <li><a href="https://github.com/csmithmountain" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/c-savela-smedberg" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/c_smithmountain" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  );
}
