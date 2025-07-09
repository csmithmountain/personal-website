import styles from './Section.module.css';

export default function AboutContent() {
  return (
    <div className={styles.section}>
      <div>
        <h2>Christoffer Savela Smedberg | Twig</h2>
        <p>Developer and aspiring illustrator.</p>
      </div>
      <div>
        <p>
          I’m Christoffer, or <em>Twig</em> as I'm known online, I'm ...
        </p>
        <ul>
          <li>a front-end developer with a degree and a strong interest in web design</li>
          <li>currently building up my technical skills and programming experience</li>
          <li>an aspiring illustrator focused on character art and storytelling</li>
          <li>working toward becoming a full-time artist</li>
        </ul>
      </div>

      <div>
        <h3>Education</h3>
        <p>Higher Vocational Education Diploma in Front-end Development</p>
        <p>(Graduated 2024)</p>
      </div>

      <div>
        <h3>Other Interests</h3>
        <ul>
          <li>Fantasy & sci-fi worlds (<em>The Magicians</em>, <em>Lord of the Rings</em>, <em>The Wheel of Time</em>)</li>
          <li>Nature lover — it’s my favorite way to recharge and find inspiration</li>
          <li>Big video game nerd — gaming is where I relax, explore stories, and connect with friends</li>
          <li>Photography, crafting (like crochet), and all things creative</li>
        </ul>
      </div>

      <div>
        <h3>Language Proficiency</h3>
        <p>I have native fluency in <em>Swedish</em> and bordering native fluency in <em>English</em>.</p>
      </div>

      <div>
        <h3>Contact</h3>
        <p>
          Feel free to reach out via email:{" "}
          <a href="mailto:c.savela.smedberg@proton.me">
            c.savela.smedberg@proton.me
          </a>
        </p>
      </div>
    </div>
  );
}
