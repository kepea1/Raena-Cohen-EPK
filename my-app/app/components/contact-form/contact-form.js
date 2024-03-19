"use client";
import styles from "../../page.module.css";
import { set, useForm } from "react-hook-form";
import { useState } from "react";
import sendEmail from "../../../utils/send-email";
// import Styles from "./new-single.module.css";
// import Image from "next/image";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setmessage] = useState("");

  const onSubmit = (data) => {
    setmessage("Thank you for your message, we will be in contact soon.");
    sendEmail(data);
    reset();
  };

  // function onSubmit(data) {
  //   sendEmail(data);
  // }

  return (
    <>
      <div>
        <p className={styles.contact_form_feedback}>{message}</p>

        <form className={styles.contact_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_item}>
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              className={styles.form_input}
              id="name"
              type="text"
              placeholder="Raena Cohen"
              {...register("name", { required: true })}
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="email" className="">
              Email Address
            </label>
            <input
              className={styles.form_input}
              type="email"
              id="email"
              placeholder="example@domain.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              className={styles.form_input_textarea}
              id="message"
              {...register("message", { required: true })}
              rows={4}
              placeholder="Type your message"
            ></textarea>
          </div>
          <div className={`${styles.form_input_checkbox} ${styles.form_input}`}>
            <input
              type="checkbox"
              id="newsletter-sign-up"
              name="form-name"
              value="contact"
            />
            <label htmlFor="newsletter-sign-up">
              {" "}
              Sign up to the Newsletter
            </label>
          </div>

          <div className={styles.form_item}>
            <button className={styles.contact_btn}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
