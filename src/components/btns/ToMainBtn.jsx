'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/scss/toMainBtn.module.scss';

const ToMainBtn = () => {
    return (
        <>
        <button className={styles.btnBlock}>
            <Link href="/" className={styles.toHome}>На головну</Link>
        </button>
        </>

    );
};

export default ToMainBtn;
