import styles from "../page.module.css";
import Navbar from "../nav/navbar.js";

export default function Contact() {
  return (
    <>
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <main className={styles.text}>
          <p>Contact Details..</p>
        </main>
      </div>
    </>
  );
}
