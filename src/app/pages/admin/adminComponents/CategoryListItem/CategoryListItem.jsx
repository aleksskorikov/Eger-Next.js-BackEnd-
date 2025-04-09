"use client";

import React from "react";
import styles from "./_categoryListItem.module.scss";

const CategoryListItem = ({ category, pageName, productCategory, name, onClick }) => {
    return (
        <li 
            className={styles.listsList} 
            onClick={() => {
                onClick(category, pageName, productCategory);
            }}
        >
            {name}
        </li>
    );
};


export default CategoryListItem;

