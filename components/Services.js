import styles from './Services.module.css';

    export default function Services() {
      return (
        <section className={styles.services}>
          <h2>Services</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Service 1</h3>
              <p>Description of service 1.</p>
            </div>
            <div className={styles.card}>
              <h3>Service 2</h3>
              <p>Description of service 2.</p>
            </div>
            <div className={styles.card}>
              <h3>Service 3</h3>
              <p>Description of service 3.</p>
            </div>
          </div>
        </section>
      );
    }
