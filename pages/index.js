import { useState } from 'react';
import ModalCard from '../components/ModalCard';
import styles from '../styles/Home.module.css';

import AboutContent from '../components/AboutContent';
import WorkContent from '../components/WorkContent';
import LinksContent from '../components/LinksContent';
import ContactContent from '../components/ContactContent';
import FunFactsContent from '../components/FunFactsContent';

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const cardContent = {
    about: <AboutContent />,
    work: <WorkContent />,
    links: <LinksContent />,
    contact: <ContactContent />,
    funfacts: <FunFactsContent />,
  };

  const buttons = [
    { label: 'About', key: 'about' },
    { label: 'Work', key: 'work' },
    { label: 'Links', key: 'links' },
    { label: 'Contact', key: 'contact' },
    { label: 'Fun facts', key: 'funfacts' },
  ];

  return (
    <div className={styles.container}>
      <h1>Hello!</h1>
      <h2>I’m <span className={styles.name}>Christoffer</span></h2>
      <p className={styles.subtitle}>Developer | Aspiring Illustrator</p>

      <div className={styles.grid}>
        {buttons.map(({ label, key }) => (
          <div key={key} className={styles.card} onClick={() => setActiveCard(key)}>
            {label}
          </div>
        ))}
      </div>

      {activeCard && (
        <ModalCard title={buttons.find(b => b.key === activeCard).label} onClose={() => setActiveCard(null)}>
          {cardContent[activeCard]}
        </ModalCard>
      )}
    </div>
  );
}
