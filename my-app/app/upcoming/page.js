import styles from "../page.module.css";
import Navbar from "../nav/navbar.js";

export default function Upcoming() {
  return (
    <>
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <main className={styles.text}>
          <p> Upcoming releases.. </p>
        </main>
      </div>
    </>
  );
}
