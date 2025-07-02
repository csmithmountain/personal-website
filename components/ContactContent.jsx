import styles from './Section.module.css';

export default function ContactContent() {
  return (
    <div className={styles.section}>
      <p>Contact me via email: <a href="mailto:c.savela.smedberg@proton.me">c.savela.smedberg@proton.me</a></p>
      <p>Or find me on social media!</p>
    </div>
  );
}
