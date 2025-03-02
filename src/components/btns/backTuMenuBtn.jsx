"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/scss/product.module.scss";

const BackToMenuBtn = () => {
    const router = useRouter();

    const goBack = () => {
        router.back(); // Возвращает на предыдущую страницу
    };

    return (
        <button onClick={goBack} id="menu" className={styles.toHome}>
            повернутися до меню
        </button>
    );
};

export default BackToMenuBtn;


