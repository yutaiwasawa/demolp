import styles from './Footer.module.css';

    export default function Footer() {
      return (
        <footer className={styles.footer}>
          <p>THE TECH Company</p>
          <div>
            <a><i className="fab fa-twitter"></i></a>
            <a><i className="fab fa-facebook"></i></a>
            <a><i className="fab fa-instagram"></i></a>
          </div>
          <p>Contact: info@thetech.com</p>
        </footer>
      );
    }
