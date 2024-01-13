"use client";
// import Styles from "./new-single.module.css";
import styles from "../../page.module.css";
// import Image from "next/image";
import { FC } from "react"; //
import { useForm } from "react-hook-form";
import sendEmail from "../../../utils/send-email";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    // console.log(data);
    console.log("submitted");
    sendEmail(data);
  }

  return (
    <>
      <div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form className={styles.contact_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_item}>
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              className={styles.form_input}
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
              {...register("message", { required: true })}
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
