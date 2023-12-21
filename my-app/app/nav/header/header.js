import Link from "next/link";
import styles from "../../page.module.css";

export default function Header() {

//   document.querySelector("link").addEventListener("click", function() {
//   console.log("click");
// } );




  return (
    <>
      <div className={styles.card}>
        <Link href="/bio">Bio</Link>
      </div>
      <div className={styles.card}>
        <Link href="/videos">Videos</Link>
      </div>
      <div className={styles.card}>
        <Link href="/upcoming">Upcoming</Link>
      </div>
      <div className={styles.card}>
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
}
