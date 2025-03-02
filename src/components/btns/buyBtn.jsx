"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/scss/product.module.scss";
import Mail from "../Mail"; // Импорт компонента Mail

const BuyBtn = () => {
    const [position, setPosition] = useState({ top: "0px", left: "0px" });
    const [showMail, setShowMail] = useState(false); // Состояние для отображения Mail

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const handleMouseEnter = () => {
            setPosition({
                top: `${getRandomInt(0, 150)}px`,
                left: `${getRandomInt(0, 150)}px`
            });
        };

        const button = document.getElementById("my-button");
        if (button) {
            button.addEventListener("mouseenter", handleMouseEnter);
        }

        return () => {
            if (button) {
                button.removeEventListener("mouseenter", handleMouseEnter);
            }
        };
    }, []);

    return (
        <>
            <div className={styles.btnPoz}>
                <button
                    id="my-button"
                    className={styles.buyBtn}
                    style={{ position: "relative", ...position }}
                    onClick={() => setShowMail(true)} // Открытие Mail по клику
                >
                    Купити
                </button>
            </div>

            {/* Передаем onClose в Mail */}
            {showMail && <Mail onClose={() => setShowMail(false)} />}
        </>
    );
};

export default BuyBtn;


