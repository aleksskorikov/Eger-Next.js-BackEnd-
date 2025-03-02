
"use client";

import React, { useState, useEffect } from "react";
import styles from "../../../../styles/scss/admin.module.scss";
import FilteredProducts from "./filteredProducts";
import useFetchProducts from "@/app/Hooks/useFetchProducts";
import CategoryListItem from "./CategoryListItem";
import categories from "./weaponCategories";

const Weapon = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { products } = useFetchProducts();

    useEffect(() => {
        if (selectedCategory && products.length > 0) {
            const filtered = products.filter((product) => product.category === selectedCategory.category);
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, products]);

    const handleCategoryClick = (category, pageName, productCategory) => {
        setSelectedCategory({ category, pageName, productCategory });
    };

    return (
        <>
            <div className={styles.hanter}>
                <p className={styles.title}>зброя та самооборона</p>
                <ol className={styles.lists}>
                    {categories.map((categoryItem, index) => (
                        <li key={index} className={styles.list}>
                            <div className={styles.listTitle}>{categoryItem.title}</div>
                            {categoryItem.subcategories.map((subcategory, subIndex) => (
                                <ul key={subIndex}>
                                    {subcategory.subtitle && <p className={styles.listSubtitle}>{subcategory.subtitle}</p>}
                                    {subcategory.items.map((item, itemIndex) => (
                                        <CategoryListItem
                                            key={itemIndex}
                                            {...item}
                                            onClick={handleCategoryClick}
                                        />
                                    ))}
                                </ul>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>
            <FilteredProducts />
        </>
    );
};

export default Weapon;