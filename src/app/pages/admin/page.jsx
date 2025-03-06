"use client";

import React, { useState, useEffect } from "react";
import Hanter from "./adminComponents/hanter";
import Fishing from "./adminComponents/fishing";
import Weapon from "./adminComponents/weapon";
import Tourizm from "./adminComponents/tourizm";
import styles from "../../../styles/scss/admin.module.scss";
import useFetchProducts from "@/app/Hooks/useFetchProducts";
import FilteredProducts from "./adminComponents/filteredProducts";
import AddProductBtn from "./adminComponents/addProductBtn";

const Admin = () => {
    const { products, error} = useFetchProducts();
    const [selectedCategory, setSelectedCategory] = useState({
        category: null,
        page_name: null,
        product_category: null,
    });
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
    if (selectedCategory.category && products.length > 0) {
        const filtered = products.filter(
            (product) =>
                product.category === selectedCategory.category &&
                product.page_name === selectedCategory.page_name &&
                product.product_category === selectedCategory.product_category
        );

        setFilteredProducts(filtered);
    } else {
        setFilteredProducts([]);
    }
}, [selectedCategory, products]);


    const handleCategoryClick = (category, page_name, product_category) => {
        setSelectedCategory({
            category,
            page_name,
            product_category,
        });
    };

    

const handleAddProduct = async (formData) => {
    if (!selectedCategory || !selectedCategory.category) {
        console.error("❌ Ошибка: Категория не выбрана!", selectedCategory);
        return;
    }

    formData.append("category", selectedCategory.category || "default");
    formData.append("page_name", selectedCategory.page_name || "default_page");
    formData.append("product_category", selectedCategory.product_category || "default_category");

    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            body: formData
        });
        
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error(`Неверный формат ответа: ${await response.text()}`);
        }

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Ошибка при добавлении продукта");
        }

    } catch (error) {
        console.error("🚨 Ошибка при добавлении продукта:", error.message);
    }
};

    return (
        <div className={styles.container}>
            <section className={styles.sections}>
                <Hanter onCategoryClick={handleCategoryClick} />
                <Fishing onCategoryClick={handleCategoryClick} />
                <Weapon onCategoryClick={handleCategoryClick} />
                <Tourizm onCategoryClick={handleCategoryClick} />
            </section>

            <section className={styles.adminBlock}>
                <div className="products">
                    {selectedCategory.category ? (
                        <>
                            {error && <p className={styles.error}>{error}</p>}
                            <FilteredProducts products={filteredProducts} selectedCategory={selectedCategory} />
                            <AddProductBtn onAddProduct={handleAddProduct} selectedCategory={selectedCategory} />
                        </>
                    ) : (
                        <div>
                            <p className={styles.message}>Выберите категорию</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Admin;
