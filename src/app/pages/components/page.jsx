import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/care.jpg";
import MenuImg1 from "../assets/images/menu img/components1.jpg";
import MenuImg2 from "../assets/images/menu img/components2.jpg";
import MenuImg3 from "../assets/images/menu img/components3.jpg";
import MenuImg4 from "../assets/images/menu img/components4.jpg";
import MenuImg5 from "../assets/images/menu img/components5.jpg";
import ProductSlider from './productSlider';
import ProductCard from "./productCard";
import "../styles/scss/_productPages.scss";
import OllAll from './oll-all';
import Mail from './mail';
import ToMainBtn from './toMainBtn';

const Components = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'components';

return (
<>
    <ProductSlider />
    <ToMainBtn />
    <div className="menu">
        <h1 className="menu__title">комплектуючі</h1>
        <div className="menu__one" id="menu-one">
            <div className="menu__items">
                <img src={MenuImg} alt="Menu" className={`menu__img ${activeMenuOne==='all' ? 'activ' : '' }`}
                    data-id="all" onClick={()=> setActiveMenuOne('all')}
                />
                <p className="menu__name">Всі комплектуючі</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg1} alt="Menu" className={`menu__img ${activeMenuOne==='product-category1' ? 'activ' : ''
                    }`} data-id="product-category1" onClick={()=> setActiveMenuOne('product-category1')}
                />
                <p className="menu__name">Комплектуючі до зброї</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg2} alt="Menu" className={`menu__img ${activeMenuOne==='product-category2' ? 'activ' : ''
                    }`} data-id="product-category2" onClick={()=> setActiveMenuOne('product-category2')}
                />
                <p className="menu__name">Кріплення для оптики</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg3} alt="Menu" className={`menu__img ${activeMenuOne==='product-category3' ? 'activ' : ''
                    }`} data-id="product-category3" onClick={()=> setActiveMenuOne('product-category3')}
                />
                <p className="menu__name">Травмотичній зброї</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg4} alt="Menu" className={`menu__img ${activeMenuOne==='product-category4' ? 'activ' : ''
                    }`} data-id="product-category4" onClick={()=> setActiveMenuOne('product-category4')}
                />
                <p className="menu__name">Пневматичній зброї</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg5} alt="Menu" className={`menu__img ${activeMenuOne==='product-category5' ? 'activ' : ''
                    }`} data-id="product-category5" onClick={()=> setActiveMenuOne('product-category5')}
                />
                <p className="menu__name">Мітальній зброї</p>
            </div>
        </div>

        <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

    </div>
    <OllAll />
    <Mail />
</>
);
};

export default Components;
