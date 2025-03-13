"use client";

import React, { useState, useEffect } from "react";
import styles from "../../../../styles/scss/filteredProducts.module.scss";
import DeleteBtn from "./deliteBtn";
import EditProductForm from "./EditProductForm";

const FilteredProducts = ({ products }) => {
    const [productList, setProductList] = useState(products || []);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        setProductList(products);
    }, [products]);

    if (!productList || !Array.isArray(productList)) {
        return <p>Товары не загружены или данные некорректны</p>;
    }

    if (productList.length === 0) {
        return <p>Товары не найдены</p>;
    }

    const handleEditClick = (product) => {
        setEditingProduct(product);
    };

    const handleDelete = (deletedProductId) => {
        setProductList((prev) => prev.filter(product => product.id !== deletedProductId));
    };

    const handleSave = (updatedProduct) => {
        setProductList((prev) =>
            prev.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
        setEditingProduct(null); 
    };

    return (
        <div className={styles.productsContainer}>
            <h2 className={styles.title}>Отфильтрованные товары</h2>
            <div className={styles.productsGrid}>
                {productList.map((product, index) => {
                    if (!product || !product.name || !product.price) {
                        console.error("Некорректный продукт:", product);
                        return null;
                    }

                    const images = [
                        product.imgSrc, product.img2, product.img3, product.img4,
                        product.img5, product.img6, product.img7, product.img8,
                        product.img9, product.img10
                    ].filter(Boolean);

                    return (
                        <div key={index} className={styles.productCard}>
                            <div className={styles.imageSlider}>
                                {images.length > 0 ? (
                                    images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={`http://localhost:5001/${img}`}
                                            alt={`Product ${product.name} - ${i + 1}`}
                                            className={styles.productImage}
                                        />
                                    ))
                                ) : (
                                    <p className={styles.noImage}>Нет изображения</p>
                                )}
                            </div>

                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productDescription}>{product.description || "Описание отсутствует"}</p>

                            <ol className={styles.productFeatures}>
                                {Array.from({ length: 20 }, (_, i) => `list${i + 1}`)
                                    .map(field => product[field])
                                    .filter(Boolean)
                                    .map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                            </ol>

                            <p className={styles.productPrice}>Цена: {product.price} грн</p>
                            <div className={styles.blockBtn}>
                                <button onClick={() => handleEditClick(product)} className={styles.changeBtn}>Изменить товар</button>
                                <DeleteBtn productId={product.id} onDeleteSuccess={handleDelete}  /> 
                            </div>
                            
                        </div>
                    );
                })}
            </div>

            {editingProduct && (
                <EditProductForm product={editingProduct} onSave={handleSave} />
            )}
        </div>
    );
};

export default FilteredProducts;






