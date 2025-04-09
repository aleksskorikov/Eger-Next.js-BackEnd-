'use client';

import React, { useState } from 'react';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import ToMainBtn from '@/components/btns/ToMainBtn/ToMainBtn';
import OllAll from '@/components/OllAll/OllAll';
import ProductCard from '@/components/ProductCard/ProductCard';
import Menu from '@/components/Menu/Menu'; 
import styles from '../_productPages.module.scss';
import Slide1 from '../../../../public/images/pages-img/patron1.jpg';
import Slide2 from '../../../../public/images/pages-img/patron2.jpg';
import Slide3 from '../../../../public/images/pages-img/patron3.jpg';
import Slide4 from '../../../../public/images/pages-img/patron4.jpg';
import Slide5 from '../../../../public/images/pages-img/guns1.jpg';
import Slide6 from '../../../../public/images/pages-img/guns2.jpg';
import Slide7 from '../../../../public/images/pages-img/guns1.jpg';
import Slide8 from '../../../../public/images/pages-img/guns4.jpg';

import MenuImg from "../../../../public/images/menu img/lanterns.jpg";
import MenuImg1 from "../../../../public/images/menu img/lanterns1.jpg";
import MenuImg2 from "../../../../public/images/menu img/lanterns2.jpg";
import MenuImg3 from "../../../../public/images/menu img/lanterns3.jpg";
import MenuImg4 from "../../../../public/images/menu img/lanterns4.jpg";
import MenuImg5 from "../../../../public/images/menu img/lanterns5.jpg";
import MenuImg6 from "../../../../public/images/menu img/lanterns6.jpg";

const Lanterns = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'lanterns';
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
    
        const handleFetchedProducts = (data) => {
            // Логика обработки данных продуктов
        };

    const menuItemsOne = [
        { img: MenuImg, id: 'all', name: 'Всі Ліхтарі' },
        { img: MenuImg1, id: 'product-category1', name: 'Комплектуючі для ліхтарів' },
        { img: MenuImg2, id: 'product-category2', name: 'Налобні ліхтарі' },
        { img: MenuImg3, id: 'product-category3', name: 'Ручні ліхтарі' },
        { img: MenuImg4, id: 'product-category4', name: 'Кемпенгові ліхтарі' },
        { img: MenuImg5, id: 'product-category5', name: 'Ліхтарі зброї' },
        { img: MenuImg6, id: 'product-category6', name: 'Елементи живлення' }
    ];

    return (
        <div className={styles.container}>
            <ProductSlider images={images}/>
            <ToMainBtn />
            <div className={styles.menu}>
                <h1 className={styles.menuTitle}>Ліхтарі</h1>
                <Menu
                    menuItems={menuItemsOne}
                    activeMenu={activeMenuOne}
                    onMenuItemClick={setActiveMenuOne}
                />
                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" onProductsFetched={handleFetchedProducts}/>
            </div>
            <OllAll />
        </div>
    );
};

export default Lanterns;


