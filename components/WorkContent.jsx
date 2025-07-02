import styles from './Section.module.css';

export default function WorkContent() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectCard}>
        <img src="/project1.png" alt="Project 1" className={styles.projectImage} />
        <h3>Cool Project</h3>
        <p>A little description of what it does.</p>
        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      </div>
      <div className={styles.projectCard}>
        <img src="/project2.png" alt="Project 2" className={styles.projectImage} />
        <h3>Another Project</h3>
        <p>This one does something even cooler.</p>
        <a href="https://yourprojectliveurl.com" target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  );
}
