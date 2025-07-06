import styles from './Section.module.css';

export default function WorkContent() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectCard}>
        <img src="#" alt="Project 1" className={styles.projectImage} /> {/* Add a source */}
        <h3>Cool Project</h3>
        <p>A little description of what it does.</p>
        <a href="#" target="_blank" rel="noopener noreferrer"> {/* Add a source */}
          View Code
        </a>
      </div>
      <div className={styles.projectCard}>
        <img src="#" alt="Project 2" className={styles.projectImage} /> {/* Add a source */}
        <h3>Another Project</h3>
        <p>This one does something even cooler.</p>
        <a href="#" target="_blank" rel="noopener noreferrer"> {/* Add a source */}
          Visit Site
        </a>
      </div>
      <div className={styles.projectCard}>
        <img src="#" alt="Project 3" className={styles.projectImage} /> {/* Add a source */}
        <h3>Another Project</h3>
        <p>This one does something even cooler.</p>
        <a href="#" target="_blank" rel="noopener noreferrer"> {/* Add a source */}
          Visit Site
        </a>
      </div>
    </div>
  );
}
