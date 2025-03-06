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

import MenuImg from "../../../../public/images/menu img/equipments.jpg";
import MenuImg1 from "../../../../public/images/menu img/equipments1.jpg";
import MenuImg2 from "../../../../public/images/menu img/equipments2.jpg";
import MenuImg3 from "../../../../public/images/menu img/equipments3.jpg";
import MenuImg4 from "../../../../public/images/menu img/equipments4.jpg";
import MenuImg5 from "../../../../public/images/menu img/equipments5.jpg";
import MenuImg6 from "../../../../public/images/menu img/equipments6.jpg";
import MenuImg7 from "../../../../public/images/menu img/equipments7.jpg";
import MenuImg8 from "../../../../public/images/menu img/equipments8.jpg";
import Slide1 from '../../../../public/images/pages-img/patron1.jpg';
import Slide2 from '../../../../public/images/pages-img/patron2.jpg';
import Slide3 from '../../../../public/images/pages-img/patron3.jpg';
import Slide4 from '../../../../public/images/pages-img/patron4.jpg';
import Slide5 from '../../../../public/images/pages-img/guns1.jpg';
import Slide6 from '../../../../public/images/pages-img/guns2.jpg';
import Slide7 from '../../../../public/images/pages-img/guns1.jpg';
import Slide8 from '../../../../public/images/pages-img/guns4.jpg';

const Equipments = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'equipments';
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
    
        const handleFetchedProducts = (data) => {
            // Логика обработки данных продуктов
        };

    const menuItemsOne = [
        { img: MenuImg, id: 'all', name: 'Все Екіпірування' },
        { img: MenuImg1, id: 'product-category1', name: 'Розвантажувальні та бронежелети' },
        { img: MenuImg2, id: 'product-category2', name: 'Страхувальні желети' },
        { img: MenuImg3, id: 'product-category3', name: 'Бронепластини' },
        { img: MenuImg4, id: 'product-category4', name: 'Шоломи' },
        { img: MenuImg5, id: 'product-category5', name: 'Налокітники та наколінники' },
        { img: MenuImg6, id: 'product-category6', name: 'Навушники та беруші' },
        { img: MenuImg7, id: 'product-category7', name: 'Окуляри' },
        { img: MenuImg8, id: 'product-category8', name: 'Підсумки' }
    ];

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.container}>
                <ProductSlider images={images}/>
                <ToMainBtn />
                <div className={styles.menu}>
                    <h1 className={styles.menuTitle}>Екіпірування</h1>
                    <Menu
                        menuItems={menuItemsOne}
                        activeMenu={activeMenuOne}
                        onMenuItemClick={setActiveMenuOne}
                    />
                    <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" onProductsFetched={handleFetchedProducts}/>
                </div>
                <OllAll />
            </div>
            <Footer />
        </div>
    );
};

export default Equipments;

