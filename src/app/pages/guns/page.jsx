'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductSlider from '@/components/ProductSlider';
import ToMainBtn from '@/components/btns/ToMainBtn';
import OllAll from '@/components/OllAll';
import ProductCard from '@/components/ProductCard';
import styles from '@/styles/scss/_productPages.module.scss';
import MenuImg from '../../../../public/images/menu img/gans.jpg';
import MenuImg1 from '../../../../public/images/menu img/gans1.jpg';
import MenuImg2 from '../../../../public/images/menu img/gans2.jpg';
import MenuImg3 from '../../../../public/images/menu img/gans3.jpg';
import MenuImg4 from '../../../../public/images/menu img/gans4.jpg';
import MenuImg5 from '../../../../public/images/menu img/gans5.jpg';
import MenuImg6 from '../../../../public/images/menu img/gans6.jpg';
import MenuImg7 from '../../../../public/images/menu img/guns7.jpg';
import Slide1 from '../../../../public/images/pages-img/patron1.jpg';
import Slide2 from '../../../../public/images/pages-img/patron2.jpg';
import Slide3 from '../../../../public/images/pages-img/patron3.jpg';
import Slide4 from '../../../../public/images/pages-img/patron4.jpg';
import Slide5 from '../../../../public/images/pages-img/guns1.jpg';
import Slide6 from '../../../../public/images/pages-img/guns2.jpg';
import Slide7 from '../../../../public/images/pages-img/guns1.jpg';
import Slide8 from '../../../../public/images/pages-img/guns4.jpg';

const Guns = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const [activeMenuTwo, setActiveMenuTwo] = useState('all');
    const pageName = 'guns';
    const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
const handleFetchedProducts = (data) => {
    // console.log('Полученные продукты:', data);
    // Здесь можно добавить логику обновления состояния, если нужно
};
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.container}>
                <ProductSlider images={images}/>
                <ToMainBtn />
                <div className={styles.menu}>
                    <h1 className={styles.menuTitle}>Ружья</h1>
                    <h2 className={styles.menuSubtitle}>Нарезні</h2>
                    <div className={styles.menuOne}>
                        {[ 
                            { img: MenuImg, id: 'all', name: 'Всі нарезні' },
                            { img: MenuImg1, id: 'product-category1', name: 'напівавтомотичні' },
                            { img: MenuImg2, id: 'product-category2', name: 'Штуцери' },
                            { img: MenuImg3, id: 'product-category3', name: 'з поздовжньо-ковзним затвором' },
                            { img: MenuImg4, id: 'product-category4', name: 'Дрібноколіберні' }
                        ].map(({ img, id, name }) => (
                            <div key={id} className={styles.menuItems} onClick={() => setActiveMenuOne(id)}>
                                <Image src={img} alt={name} className={`${styles.menuImg} ${activeMenuOne === id ? styles.active : ''}`} />
                                <p className={styles.menuName}>{name}</p>
                            </div>
                        ))}
                    </div>
                    <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" onProductsFetched={handleFetchedProducts} />

                    <h2 className={styles.menuSubtitle}>Гладкоствольные</h2>
                    <div className={styles.menuOne}>
                        {[ 
                            { img: MenuImg, id: 'all', name: 'Всі гладкоствольні' },
                            { img: MenuImg7, id: 'product-category-two1', name: 'переломні' },
                            { img: MenuImg4, id: 'product-category-two2', name: 'напівавтоматичні' },
                            { img: MenuImg5, id: 'product-category-two3', name: 'помпові' },
                            { img: MenuImg6, id: 'product-category-two4', name: 'з продольно-ковзним затвором' }
                        ].map(({ img, id, name }) => (
                            <div key={id} className={styles.menuItems} onClick={() => setActiveMenuTwo(id)}>
                                <Image src={img} alt={name} className={`${styles.menuImg} ${activeMenuTwo === id ? styles.active : ''}`} />
                                <p className={styles.menuName}>{name}</p>
                            </div>
                        ))}
                    </div>
                    <ProductCard pageName={pageName} activeCategory={activeMenuTwo} productCategory="productsTwo" onProductsFetched={handleFetchedProducts}/>
                </div>
                <OllAll />
                {/* <Mail /> */}
                
            </div>
            <Footer />
        </div>
    );
};

export default Guns;
