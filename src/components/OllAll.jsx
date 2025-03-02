"use client";

import React, { useEffect } from 'react';
import styles from "../styles/scss/OllAll.module.scss";

const OllAll = () => {
    useEffect(() => {
        const button = document.getElementById("on-all");
        button.onclick = function () {
            document.getElementById("header").scrollIntoView({ behavior: "smooth" });
        };
    }, []);

    return (
        <>
            <button className={styles.OnAll}  id="on-all"></button>
        </>
    );
};

export default OllAll;


