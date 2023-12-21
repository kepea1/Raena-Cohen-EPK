import Media from "./media/media.js";
import Header from "./header/header.js";
import styles from "../../app/page.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Media />
        </div>
        <Link href="/">
          <header className={styles.banner} role="banner">
            <h1 className={styles.title}>Raena </h1>
            <h1 className={styles.title}> Cohen</h1>
          </header>
        </Link>
        <div className={styles.nav_routes}>
          <Header />
        </div>
      </nav>
    </>
  );
}
