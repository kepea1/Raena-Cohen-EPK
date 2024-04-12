import Media from "./media/media.js";
import Header from "./header/header.js";
import styles from "../../app/page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Media />
        </div>
        <Link href="/">
          <header className={styles.banner} role="banner">
            {/* <Image
              src="/BLUE_RAENA_HERO_1920x800_BLACK2.png"
              width={700}
              height={200}
              alt="Raena Cohen logo"
            /> */}
            <div className={styles.hero_image}>
              <div className={styles.hero_wrapper}>
                <Image
                  src="/BLUE_RAENA_HERO_2LINES_1920x800_WHITE2_CROPPESD.png"
                  width={900}
                  height={800}
                  alt="Raena Cohen logo"
                  layout="responsive"
                  // objectFit="cover"
                />
              </div>
            </div>
            {/* <Image
              src="/BLUE_RAENA_HERO_1920x800_WHITE2.png"
              width={900}
              height={100}
              alt="Raena Cohen logo"
            /> */}

            {/* <h1 className={styles.title}>Raena </h1>
            <h1 className={styles.title}> Cohen</h1> */}
          </header>
        </Link>
        <div className={styles.nav_routes}>
          <Header />
        </div>
      </nav>
    </>
  );
}
