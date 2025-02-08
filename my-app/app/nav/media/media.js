import styles from "../../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Media() {
  return (
    <>
      <div className={styles.socials}>
        <div className={styles.card_socials}>
          <Link
            href="https://open.spotify.com/artist/4eJ2JIZ4cXZ9Ht13jmXjAF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-spotify-50.png"
              width={40}
              height={40}
              alt="spotify logo"
            />
          </Link>
        </div>
        <div className={styles.card_socials}>
          <Link
            href="https://soundcloud.com/raenacohen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-soundcloud-50.png"
              width={40}
              height={40}
              alt="soundcloud logo"
            />
          </Link>
        </div>
        <div className={styles.card_socials}>
          <Link
            href="https://raenacohen.bandcamp.com/community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-bandcamp-50.png"
              width={40}
              height={40}
              alt="soundcloud logo"
            />
          </Link>
        </div>

        <br></br>
        <div className={styles.card_socials}>
          <Link
            href="https://www.facebook.com/ladyraeartist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-facebook-50.png"
              width={40}
              height={40}
              alt="facebook logo"
            />
          </Link>
        </div>
        <div className={styles.card_socials}>
          <Link
            href="https://www.youtube.com/@raenacohen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-youtube-48.png"
              width={40}
              height={40}
              alt="youtube logo"
            />
          </Link>
        </div>
        <div className={styles.card_socials}>
          <Link
            href="https://www.instagram.com/Raenacohen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-instagram-50.png"
              width={40}
              height={40}
              alt="boomplay logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
