'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductSlider from '@/components/ProductSlider';
import ToMainBtn from '@/components/btns/ToMainBtn';
import OllAll from '@/components/OllAll';
import ProductCard from '@/components/ProductCard';
import Menu from '@/components/Menu'; 
import styles from '@/styles/scss/_productPages.module.scss';

import MenuImg from '../../../../public/images/menu img/closAll.jpg';
import MenuImg1 from '../../../../public/images/menu img/clos.jpg';
import MenuImg2 from '../../../../public/images/menu img/clos1.jpg';
import MenuImg3 from '../../../../public/images/menu img/clos2.jpg';
import MenuImg4 from '../../../../public/images/menu img/clos3.jpg';
import MenuImg5 from '../../../../public/images/menu img/closs.jpg';
import MenuImg6 from '../../../../public/images/menu img/clos4.jpg';
import MenuImg7 from '../../../../public/images/menu img/clos5.jpg';
import MenuImg8 from '../../../../public/images/menu img/clos6.jpg';
import MenuImg9 from '../../../../public/images/menu img/clos8.jpg';
import Slide1 from '../../../../public/images/pages-img/patron1.jpg';
import Slide2 from '../../../../public/images/pages-img/patron2.jpg';
import Slide3 from '../../../../public/images/pages-img/patron3.jpg';
import Slide4 from '../../../../public/images/pages-img/patron4.jpg';
import Slide5 from '../../../../public/images/pages-img/guns1.jpg';
import Slide6 from '../../../../public/images/pages-img/guns2.jpg';
import Slide7 from '../../../../public/images/pages-img/guns1.jpg';
import Slide8 from '../../../../public/images/pages-img/guns4.jpg';

const Cloth = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const [activeMenuTwo, setActiveMenuTwo] = useState('all');
    const pageName = 'cloth';
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

    const handleFetchedProducts = (data) => {
        // Логика обработки данных продуктов
    };

    const menuItemsOne = [
        { img: MenuImg, id: 'all', name: 'Весь одяг' },
        { img: MenuImg1, id: 'product-category1', name: 'Куртки' },
        { img: MenuImg2, id: 'product-category2', name: 'Костюми' },
        { img: MenuImg3, id: 'product-category3', name: 'Футболки та джемпера' },
        { img: MenuImg4, id: 'product-category4', name: 'Штани та комбінезони' }
    ];

    const menuItemsTwo = [
        { img: MenuImg5, id: 'all', name: 'Все взуття' },
        { img: MenuImg6, id: 'product-category-two1', name: 'Черевики' },
        { img: MenuImg7, id: 'product-category-two2', name: 'Чоботи' },
        { img: MenuImg8, id: 'product-category-two3', name: 'Гумові чоботи' },
        { img: MenuImg9, id: 'product-category-two4', name: 'Заброди та комбінезони' }
    ];

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.container}>
                <ProductSlider images={images}/>
                <ToMainBtn />
                <div className={styles.menu}>
                    <h1 className={styles.menuTitle}>ОДЯГ</h1>
                    <h2 className={styles.menuSubtitle}>Верхній одяг</h2>
                    <Menu
                        menuItems={menuItemsOne}
                        activeMenu={activeMenuOne}
                        onMenuItemClick={setActiveMenuOne}
                    />
                    <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" onProductsFetched={handleFetchedProducts}/>

                    <h2 className={styles.menuSubtitle}>Взуття</h2>
                    <Menu
                        menuItems={menuItemsTwo}
                        activeMenu={activeMenuTwo}
                        onMenuItemClick={setActiveMenuTwo}
                    />
                    <ProductCard pageName={pageName} activeCategory={activeMenuTwo} productCategory="productsTwo" onProductsFetched={handleFetchedProducts}/>
                </div>
                <OllAll />
            </div>
            <Footer />
        </div>
    );
};

export default Cloth;

