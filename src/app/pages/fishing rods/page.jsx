
import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/fishing rods.jpg";
import MenuImg1 from "../assets/images/menu img/fishing rods1.jpg";
import MenuImg2 from "../assets/images/menu img/fishing rods2.jpg";
import MenuImg3 from "../assets/images/menu img/fishing rods3.jpg";
import MenuImg4 from "../assets/images/menu img/fishing rods4.jpg";
import MenuImg5 from "../assets/images/menu img/fishing rods5.jpg";
import MenuImg6 from "../assets/images/menu img/fishing rods6.jpg";
import MenuImg7 from "../assets/images/menu img/fishing rods7.jpg";
import ProductSlider from '../../app/pages/components/productSlider';
import ProductCard from "../../app/pages/components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../../app/pages/components/oll-all';
import Mail from '../../app/pages/components/mail';
import ToMainBtn from '../../app/pages/components/toMainBtn';

const FishingRods = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'fishing_rods';

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">вудки</h1>
                <div className="menu__one" id="menu-one">
                    <div className="menu__items">
                        <img 
                            src={MenuImg} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'all' ? 'activ' : ''}`} 
                            data-id="all"
                            onClick={() => setActiveMenuOne('all')}
                        />
                        <p className="menu__name">Всі вудки</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg1} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`} 
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">Спінінгові</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg2} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`} 
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Кастингові</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg3} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`} 
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">Фідерні</p>
                    </div>
                        <div className="menu__items">
                        <img 
                            src={MenuImg4} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category4' ? 'activ' : ''}`} 
                            data-id="product-category4"
                            onClick={() => setActiveMenuOne('product-category4')}
                        />
                        <p className="menu__name">Морські</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg5} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category5' ? 'activ' : ''}`} 
                            data-id="product-category5"
                            onClick={() => setActiveMenuOne('product-category5')}
                        />
                        <p className="menu__name">Коропові</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg6} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category6' ? 'activ' : ''}`} 
                            data-id="product-category6"
                            onClick={() => setActiveMenuOne('product-category6')}
                        />
                        <p className="menu__name">Поплавочні</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg7} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category7' ? 'activ' : ''}`} 
                            data-id="product-category7"
                            onClick={() => setActiveMenuOne('product-category7')}
                        />
                        <p className="menu__name">Вершинки та камлі</p>
                    </div>
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default FishingRods;