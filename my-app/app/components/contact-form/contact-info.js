import styles from "../../page.module.css";

export default function ContactInfo() {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className={styles.content}>
          <main className={styles.text}>
            <h1>Contact Info</h1>
            <p>
              {" "}
              <b>Management:</b> mgmt@raenacohen.com
              <a href="mailto:" className={styles.link}></a>
            </p>
            <p>
              <b> PR Enquires:</b>
              <a href="mailto:" className={styles.link}></a>
            </p>
            <p>
              <b>All other enquiries:</b>
              <a href="mailto:" className={styles.link}></a>
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
