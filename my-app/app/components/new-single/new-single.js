// import Styles from "./new-single.module.css";
import styles from "../../page.module.css";
import Image from "next/image";

export default function NewSingle({ src, linktree, alt, priority }) {
  return (
    <>
      <div className={styles.single}>
        <a href={linktree} target="_blank" rel="noopener noreferrer">
          <Image
            src={src}
            width={800}
            height={800}
            alt={alt}
            layout="responsive"
            priority={priority}
    
          />
        </a>
      </div>
    </> 
  );
}
