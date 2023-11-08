import styles from "../../page.module.css";
// import { YouTubeEmbed } from '@next/third-parties/google'

export default function NewVideo({src, title, loading}) {
  return (
    <>
{/* i frame styles better*/}
      {/* <div className={styles.single}>
        <YouTubeEmbed videoid="NXeu1N26uuc" width={800} height={800} params="controls=0" style={{width:"800",height:"800"}}  />
      </div> */}
      <div className={styles.single}>
      <iframe width="800" height="800"  src={src} title={`You Tube video player ${title}` } frameborder="0"  loading={loading} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </>
  );
}
