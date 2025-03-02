'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/scss/toMainBtn.module.scss';

const ToMainBtn = () => {
    return (
        <div className={styles.btnBlock}>
            <Link href="/" className={styles.toHome}>На головну</Link>
        </div>
    );
};

export default ToMainBtn;
