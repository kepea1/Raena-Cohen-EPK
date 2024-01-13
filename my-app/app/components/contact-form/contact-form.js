// import Styles from "./new-single.module.css";
import styles from "../../page.module.css";
import Image from "next/image";

export default function ContactForm() {
  return (
    <>
      <div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form className={styles.contact_form}>
          <div className={styles.form_item}>
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              className={styles.form_input}
              type="text"
              placeholder="Raena Cohen"

              // {...register("name", { required: true })}
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="email" className="">
              Email Address
            </label>
            <input
              className={styles.form_input}
              type="email"
              placeholder="example@domain.com"

              // {...register("email", { required: true })}
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              className={styles.form_input_textarea}
              // {...register("message", { required: true })}
              rows={4}
              placeholder="Type your message"
            ></textarea>
          </div>
          <div className={styles.form_item}>
            <button className={styles.contact_btn}>Submit</button>
          </div>
        </form>

        {/* <button className={styles.contact_btn}>Submit</button> */}
      </div>
    </>
  );
}

