import styles from "../../page.module.css";
import Navbar from "../navbar.js";
import NewVideo from "@/app/components/new-video/new-video";

export default function Videos() {
  return (
    <>
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <section className={styles.section}>
        <div className={styles.music}>
          {/* <div className={styles.video}> */}
          <NewVideo
            src={"https://www.youtube.com/embed/NXeu1N26uuc"}
            title={"WEIGHS DOWN"}
            loading={"eager"}
          />
          {/* </div> */}

          <NewVideo
            src={"https://www.youtube.com/embed/dQ9LH4EVib8"}
            title={"See The Light"}
            loading={"lazy"}
          /> 
          
        </div>
      </section>

      {/* <section className={styles.section}>

        <div className={styles.music}>
        <iframe width="800" height="800" margin= "1em" src="https://www.youtube.com/embed/NXeu1N26uuc?si=BA5Ep2UiQGkej3-7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <iframe width="800" height="800" src="https://www.youtube.com/embed/dQ9LH4EVib8?si=vApAK7XK6WkY1rYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section> */}
    </>
  );
}
