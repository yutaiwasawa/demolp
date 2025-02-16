import styles from './Achievements.module.css';

    export default function Achievements() {
      return (
        <section className={styles.achievements}>
          <h2>Achievements</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <img src="/dashboard1.png" alt="Dashboard 1" />
            </div>
            <div className={styles.card}>
              <img src="/dashboard2.png" alt="Dashboard 2" />
            </div>
          </div>
        </section>
      );
    }
