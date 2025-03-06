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
import MenuImg from "../../../../public/images/menu img/knives.jpg";
import MenuImg1 from "../../../../public/images/menu img/knives1.jpg";
import MenuImg2 from "../../../../public/images/menu img/knives2.jpg";
import MenuImg3 from "../../../../public/images/menu img/knives3.jpg";
import MenuImg4 from "../../../../public/images/menu img/knives4.jpg";
import MenuImg5 from "../../../../public/images/menu img/knives5.jpg";
import Slide1 from '../../../../public/images/pages-img/patron1.jpg';
import Slide2 from '../../../../public/images/pages-img/patron2.jpg';
import Slide3 from '../../../../public/images/pages-img/patron3.jpg';
import Slide4 from '../../../../public/images/pages-img/patron4.jpg';
import Slide5 from '../../../../public/images/pages-img/guns1.jpg';
import Slide6 from '../../../../public/images/pages-img/guns2.jpg';
import Slide7 from '../../../../public/images/pages-img/guns1.jpg';
import Slide8 from '../../../../public/images/pages-img/guns4.jpg';

const Knives = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'knives';
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

    const handleFetchedProducts = (data) => {
        // Логика обработки данных продуктов
    };

    const menuItemsOne = [
        { img: MenuImg, id: 'all', name: 'Всі ножі' },
        { img: MenuImg1, id: 'product-category1', name: 'Ножі з фіксованим клинком' },
        { img: MenuImg2, id: 'product-category2', name: 'Складні ножі' },
        { img: MenuImg3, id: 'product-category3', name: 'Тренувальна зброя' },
        { img: MenuImg4, id: 'product-category4', name: 'Комплектуючі для ножів' },
        { img: MenuImg5, id: 'product-category5', name: 'Точильні пристрої' }
    ];

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.container}>
                <ProductSlider images={images}/>
                <ToMainBtn />
                <div className={styles.menu}>
                    <h1 className={styles.menuTitle}>Ножі</h1>
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

export default Knives;

