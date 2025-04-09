"use client";

import React, { useState, useEffect } from "react";
import styles from "./_menuComponents.module.scss";
import useFetchProducts from "@/app/Hooks/useFetchProducts";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import categories from "./weaponCategories";

const Weapon = ({ onCategoryClick }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { products } = useFetchProducts();
    const [openCategory, setOpenCategory] = useState(null);
    const [isTitleOpen, setIsTitleOpen] = useState(true);

    useEffect(() => {
        if (selectedCategory && products.length > 0) {
            const filtered = products.filter(
                (product) =>
                    product.category === selectedCategory.category &&
                    product.pageName === selectedCategory.pageName &&
                    product.productCategory === selectedCategory.productCategory
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [selectedCategory, products]);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    const toggleTitle = () => {
        setIsTitleOpen(!isTitleOpen);
    };

    return (
        <>
            <div className={styles.hanter}>
                <p className={styles.title} onClick={toggleTitle}>
                    {isTitleOpen ? "Зброя та самооборона" : "Открыть зброю та самооборону"}
                </p>
                {isTitleOpen && (
                    <ol className={styles.lists}>
                        {categories.map((categoryItem, index) => (
                            <li key={index} className={styles.list}>
                                <div className={styles.listTitle} onClick={() => toggleCategory(categoryItem.title)}>
                                    {categoryItem.title}
                                </div>
                                {openCategory === categoryItem.title && (
                                    <ul className={styles.subcategoryList}>
                                        {categoryItem.subcategories.map((subcategory, subIndex) => (
                                            <React.Fragment key={subIndex}>
                                                {subcategory.subtitle && (
                                                    <p className={styles.listSubtitle}>{subcategory.subtitle}</p>
                                                )}
                                                {subcategory.items.map((item, itemIndex) => (
                                                    <CategoryListItem
                                                        key={itemIndex}
                                                        {...item}
                                                        onClick={(category, pageName, productCategory) => {
                                                            onCategoryClick(category, pageName, productCategory);
                                                        }}
                                                    />
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </>
    );
};

export default Weapon;