import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/scss/productCard.module.scss';
import useFetchProducts from '../app/Hooks/useFetchProducts';

const ProductCard = ({ activeCategory, pageName, productCategory }) => {
    const { products, error } = useFetchProducts();

    if (error) {
        return <p className="error">Ошибка загрузки товаров!</p>;
    }

    const filteredProducts = products.filter(product => {
        const productCategoryValue = product.product_category || 'productsOne';
        const isCategoryMatch = activeCategory === 'all' || (product.category && product.category.toLowerCase() === activeCategory.toLowerCase());
        const isPageNameMatch = pageName === 'all' || (product.page_name ? product.page_name.toLowerCase() === pageName.toLowerCase() : false);
        const isProductCategoryMatch = productCategory === 'all' || (productCategoryValue === productCategory);

        return isCategoryMatch && isPageNameMatch && isProductCategoryMatch;
    });

    return (
        <div className={styles.productsCard}>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <Link href={`/product/${product.id}`} key={product.id} className={styles.card}>
                        <div className={styles.cardImgWrapper}>
                            <Image
                                src={`http://localhost:5001/${product.imgSrc}`}
                                alt={product.name}
                                width={300}
                                height={300}
                                className={styles.cardImg}
                            />
                        </div>

                        <p className={styles.productName}>{product.name}</p>
                        <p className={styles.productPrice}>Ціна: {product.price} грн</p>
                    </Link>
                ))
            ) : (
                <p>На даний момент немає товарів у цій категорії</p>
            )}
        </div>
    );
};
export default ProductCard;


