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

// Image imports
import MenuImg from "../../../../public/images/menu img/hunting accessories.jpg";
import MenuImg1 from "../../../../public/images/menu img/hunting accessories1.jpg";
import MenuImg2 from "../../../../public/images/menu img/hunting accessories2.jpg";
import MenuImg3 from "../../../../public/images/menu img/hunting accessories3.jpg";
import MenuImg4 from "../../../../public/images/menu img/hunting accessories4.jpg";
import Slide1 from '../../../../public/images/pages-img/patron1.jpg';
import Slide2 from '../../../../public/images/pages-img/patron2.jpg';
import Slide3 from '../../../../public/images/pages-img/patron3.jpg';
import Slide4 from '../../../../public/images/pages-img/patron4.jpg';
import Slide5 from '../../../../public/images/pages-img/guns1.jpg';
import Slide6 from '../../../../public/images/pages-img/guns2.jpg';
import Slide7 from '../../../../public/images/pages-img/guns1.jpg';
import Slide8 from '../../../../public/images/pages-img/guns4.jpg';

const HuntingAccessories = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'hunting_accessories';
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
    
        const handleFetchedProducts = (data) => {
            // Логика обработки данных продуктов
        };

    const menuItemsOne = [
        { img: MenuImg, id: 'all', name: 'Мисливські аксесуари' },
        { img: MenuImg1, id: 'product-category1', name: 'Опудала' },
        { img: MenuImg2, id: 'product-category2', name: 'Горни' },
        { img: MenuImg3, id: 'product-category3', name: 'Маскування' },
        { img: MenuImg4, id: 'product-category4', name: 'Радіостанції' }
    ];

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.container}>
                <ProductSlider images={images}/>
                <ToMainBtn />
                <div className={styles.menu}>
                    <h1 className={styles.menuTitle}>Мисливські аксесуари</h1>
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

export default HuntingAccessories;

