import styles from "./page.module.css";
import NewSingle from "./components/new-single/new-single";
import Navbar from "./nav/navbar.js";
import "animate.css";

// import weighsDown from "../public/Weighs-down-cover-art-1500(upsized).jpg";

export default function Home() {
  // add an array of singles to be mapped when i have more

  return (
    <>
      <main className={styles.body}>
        <Navbar />

        <section className={styles.section}>
          <div className="animate__animated animate__fadeIn">
            <div className={styles.music}>
              {/* THIS PHOTO IS SET TO LOAD FIRST AS A PIORITY AS ITS ABOVE THE FOLD */}
              {/* ///////////// */}
              <NewSingle
                src={"/See the Light cover art-1500.jpg"}
                linktree={"https://tr.ee/EIYp7t9K3t"}
                alt={"See The Light cover art"}
              />
              <NewSingle
                src={"/Weighs-down-cover-art-1500(upsized).jpg"}
                linktree={"https://tr.ee/IZ_r-Ckjd8"}
                alt={"Weighs Down cover art"}
                priority
              />
              <NewSingle
                src={"/Sweetest Fiction RMX-1500.JPG"}
                linktree={
                  "https://soundcloud.com/raenacohen/lady-rae-x-c3b-sweetest-fiction-remix"
                }
                alt={"Sweetest Fiction Remix cover art"}
              />
              <NewSingle
                src={"/Sweetest Fiction cover-1500.jpg"}
                linktree={
                  "https://soundcloud.com/raenacohen/sweetest-fiction-oration-ep "
                }
                alt={"Sweetest-Fiction-cover art"}
              />
              <NewSingle
                src={"/Freedom cover-1500.jpg"}
                linktree={
                  "https://soundcloud.com/raenacohen/lady-rae-ft-oration-freedom"
                }
                alt={"Freedom single art cover"}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
