import styles from "../page.module.css";
import Navbar from "../nav/navbar.js";
import ContactForm from "../components/contact-form/contact-form.js";
import ContactInfo from "../components/contact-form/contact-info.js";

export default function Contact() {
  
  return (
    <>
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <div className="animate__animated animate__fadeIn">
        <main className={styles.contact}>
          <ContactForm />
          <ContactInfo />
        </main>
      </div>
    </>
  );
}
