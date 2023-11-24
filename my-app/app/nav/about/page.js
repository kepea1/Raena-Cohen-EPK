import styles from "../../page.module.css";
import Navbar from "../navbar.js";

export default function About() {
  return (
    <>
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <main className={styles.text}>
          <p>
            Soulful dreamscapes coloured with melodies &amp; poetry is Raena
            Cohen&apos;s exciting new sound. She is currently recording her
            debut EP, introducing her infectious vocal hooks with live drums and
            jazz influenced sound. Recording with a full live band including
            improvisational live takes as well as fresh new songs this EP
            &apos;Higher Planes&apos; is one to look for in 2024. Born in the
            vibrant town of Brighton, Raena trained in musical theatre from a
            young age. Music has always been an essential part of her life,
            growing up around the free party/rave scene, Raena was freestyling
            over DNB and Jungle from a young age and started out making liquid
            DNB records. Raena&apos;s true musical passion is soul, jazz and
            hiphop, with influences such as Erykah Badu, Amy Winehouse, Hiatus
            Kaiyote and Nina Simone. Her independent artistry recently reborn
            out of the vibrant jazz scene in Brighton, led her to work with
            other jazz musicians to record the demos Raena produced in her
            bedroom. She has performed in many grassroots venues mainly in
            Brighton and London and festivals including Boomtown. In 2024, Raena
            is looking to take her full band on tour around UK cities and
            festivals. After a hiatus from making music, &apos;Higher
            Planes&apos; is the revisiting of memories & detangling trauma,
            questioning current issues and finding solace in melodic flows. With
            her strong and touching jazz vocals Raena always focuses on the real
            and with this hopes to touch the listener giving a moment of space,
            soothing the soul and igniting the inspiration of the people.
          </p>
        </main>
      </div>
    </>
  );
}
