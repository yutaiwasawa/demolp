import styles from './Header.module.css';

    export default function Header() {
      return (
        <header className={styles.header}>
          <div className={styles.logo}>THE TECH</div>
          <nav className={styles.nav}>
            <a>Services</a>
            <a>Vision</a>
            <a>Achievements</a>
            <button className={styles.contactButton}>Contact Us</button>
          </nav>
        </header>
      );
    }
