"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./_mail.module.scss";

const Mail = ({ onClose }) => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateName = () => {
    const name = nameRef.current.value.trim();
    const nameValid = /^[a-zA-Zа-яА-ЯЁё]+$/;
    if (!name || !nameValid.test(name)) {
      setErrors((prev) => ({ ...prev, name: "Форма повинна містити лише літери!" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, name: "" }));
    return true;
  };

  const validateEmail = () => {
    const email = emailRef.current.value.trim();
    const emailValid = /^\S+@\S+\.\S+$/;
    if (!email || !emailValid.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Введіть правильну адресу!" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: "" }));
    return true;
  };

  const validateMessage = () => {
    const message = messageRef.current.value.trim();
    if (!message) {
      setErrors((prev) => ({ ...prev, message: "Надішліть повідомлення!" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, message: "" }));
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidMessage = validateMessage();

    if (isValidName && isValidEmail && isValidMessage) {
      alert("Форма успішно відправлена!");
      if (onClose) onClose(); 
    }
  };

    return (
      <div className={`${styles.wrapper} ${styles.formActiv}`}>
      <div className={styles.form}>
        <Image
          src="/logo/icons.svg"
          alt="Close form"
          width={24}
          height={24}
          className={styles.formClose}
          onClick={onClose} // 👈 Закрываем форму по клику
          style={{ cursor: "pointer" }}
        />

        <form ref={formRef} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>Надсилання даних на пошту</h1>
          <div className={styles.formItem}>
            <label htmlFor="formName" className={styles.formLabel}>
              Ім'я <span>*</span>
            </label>
            {errors.name && <span className={styles.error}>Форма повинна містити лише літери!</span>}
            <input ref={nameRef} id="formName" type="text" placeholder="Ваше ім'я" className={styles.formInput} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="formEmail" className={styles.formLabel}>
              Електронна пошта <span>*</span>
            </label>
            {errors.email && <span className={styles.error}>Введіть правильну адресу!</span>}
            <input ref={emailRef} id="formEmail" type="email" placeholder="Ваш E-mail" className={styles.formInput} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="formMessage" className={styles.formLabel}>
              Повідомлення <span>*</span>
            </label>
            {errors.message && <span className={styles.error}>Надішліть повідомлення!</span>}
            <textarea ref={messageRef} id="formMessage" placeholder="Ваше повідомлення" className={`${styles.formInput} ${styles.message}`}></textarea>
          </div>
          <button type="submit" className={styles.formButton}>
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;









