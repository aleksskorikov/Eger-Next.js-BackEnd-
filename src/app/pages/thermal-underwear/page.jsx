"use client";
import React, { useState } from 'react';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import ToMainBtn from '@/components/btns/ToMainBtn/ToMainBtn';
import OllAll from '@/components/OllAll/OllAll';
import ProductCard from '@/components/ProductCard/ProductCard';
import Menu from '@/components/Menu/Menu'; 
import styles from '../_productPages.module.scss';

import MenuImg from "../../../../public/images/menu img/thermal underwear.jpg";
import MenuImg1 from "../../../../public/images/menu img/thermal underwear1.jpg";
import MenuImg2 from "../../../../public/images/menu img/thermal underwear2.jpg";
import MenuImg3 from "../../../../public/images/menu img/thermal underwear3.jpg";
import MenuImg4 from "../../../../public/images/menu img/thermal underwear4.jpg";
import MenuImg5 from "../../../../public/images/menu img/thermal underwear5.jpg";
import MenuImg6 from "../../../../public/images/menu img/thermal underwear6.jpg";
import Slide1 from '../../../../public/images/pages-img/patron1.jpg';
import Slide2 from '../../../../public/images/pages-img/patron2.jpg';
import Slide3 from '../../../../public/images/pages-img/patron3.jpg';
import Slide4 from '../../../../public/images/pages-img/patron4.jpg';
import Slide5 from '../../../../public/images/pages-img/guns1.jpg';
import Slide6 from '../../../../public/images/pages-img/guns2.jpg';
import Slide7 from '../../../../public/images/pages-img/guns1.jpg';
import Slide8 from '../../../../public/images/pages-img/guns4.jpg';

const TthermalUnderwear = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'termal-underwear';
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
    
        const handleFetchedProducts = (data) => {
            // Логика обработки данных продуктов
        };

    const menuItemsOne = [
        { img: MenuImg, id: 'all', name: 'Вся Термобілизна' },
        { img: MenuImg1, id: 'product-category1', name: 'Термобілизна' },
        { img: MenuImg2, id: 'product-category2', name: 'Шкарпетки' },
        { img: MenuImg3, id: 'product-category3', name: 'Головні убори' },
        { img: MenuImg4, id: 'product-category4', name: 'Нашивки' },
        { img: MenuImg5, id: 'product-category5', name: 'Рукавички' },
        { img: MenuImg6, id: 'product-category6', name: 'Пояси' }
    ];

    return (
        <div className={styles.container}>
            <ProductSlider images={images}/>
            <ToMainBtn />
            <div className={styles.menu}>
                <h1 className={styles.menuTitle}>Термобілизна</h1>
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

export default TthermalUnderwear;



