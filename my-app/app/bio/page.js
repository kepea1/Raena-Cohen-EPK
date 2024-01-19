import styles from "../page.module.css";
import Navbar from "../nav/navbar.js";

export default function Bio() {
  return (
    <>
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <div className="animate__animated animate__fadeIn">
          <main className={styles.text}>
            <p>
              Born in the vibrant town of Brighton, Raena trained in musical
              theater from a young age. Music has always been an essential part
              of her life, but her journey into music has not been conventional.
              Growing up around the free festival scene, Raena was freestyling
              over DNB and Jungle from a young age and started out making liquid
              DNB records. However, Raena’s true musical passion is soul, jazz
              and hip-hop with influences such as Erykah Badu, Amy Winehouse,
              Souls of Mischief, Hiatus Kaiyote and Nina Simone.{" "}
            </p>
            <br></br>
            <p>
              Raena has released two singles <b>‘See The Light’</b> and{" "}
              <b>‘Weighs Down’</b> both well received by supporters and local
              radio stations. These songs are from a previous collab with
              producer Os Price and have a sultry hip-hop feel with neo-soul
              melodic vocals. Since the release of these singles, Raena has
              spent a lot of time crafting and producing her sound with more
              control over the entire creative process, leading to her latest
              collection of demos. After spending time in the vibrant up and
              coming jazz scene in Brighton, Reana was able to share her work
              with a band of jazz musicians and together they are recording this
              exciting new project entitled <b>‘Higher Planes’</b>. This project
              is the introduction of her sound to the world and the industry.
              With infectious vocal hooks, live drums and jazz influenced
              instrumentals,<b> ‘Higher Planes’ </b>is the revisiting of
              memories & detangling trauma, questioning current issues and
              finding solace in melodic flows. Recording with a full live band
              including improvisational live takes as well as fresh new songs
              this EP is one to look for in 2024. Think Voodoo, Mummas Gun,
              Frank.
            </p>
            <br></br>
            <p>
              As well as putting on her own spoken word and female led music
              events, Raena has performed in many venues, supporting local
              artists, at open mics, as well as hip-hop cyphers and jazz jams in
              Brighton and London, also at festivals including Boomtown.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
