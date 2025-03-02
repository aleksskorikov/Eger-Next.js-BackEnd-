import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/care.jpg";
import MenuImg1 from "../assets/images/menu img/care1.jpg";
import MenuImg2 from "../assets/images/menu img/care2.jpg";
import MenuImg3 from "../assets/images/menu img/care3.jpg";
import MenuImg4 from "../assets/images/menu img/care4.jpg";
import MenuImg5 from "../assets/images/menu img/care5.jpg";
import MenuImg6 from "../assets/images/menu img/care6.jpg";
import MenuImg7 from "../assets/images/menu img/care7.jpg";
import MenuImg8 from "../assets/images/menu img/care8.jpg";
import ProductSlider from '../../app/pages/components/productSlider';
import ProductCard from "../../app/pages/components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../../app/pages/components/oll-all';
import Mail from '../../app/pages/components/mail';
import ToMainBtn from '../../app/pages/components/toMainBtn';

const Care = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'care';

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">ДОГЛЯД ЗА ЗБРОЄЮ</h1>
                <div className="menu__one" id="menu-one">
                    <div className="menu__items">
                        <img 
                            src={MenuImg} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'all' ? 'activ' : ''}`} 
                            data-id="all"
                            onClick={() => setActiveMenuOne('all')}
                        />
                        <p className="menu__name">Чистка та догляд</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg1} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`} 
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">Шомполи</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg2} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`} 
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Набори для чищення</p>
                    </div>
                        <div className="menu__items">
                        <img 
                            src={MenuImg3} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`} 
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">Протяжки</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg4} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category4' ? 'activ' : ''}`} 
                            data-id="product-category4"
                            onClick={() => setActiveMenuOne('product-category4')}
                        />
                        <p className="menu__name">Насадки</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg5} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category5' ? 'activ' : ''}`} 
                            data-id="product-category5"
                            onClick={() => setActiveMenuOne('product-category5')}
                        />
                        <p className="menu__name">Направляючі</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg6} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category6' ? 'activ' : ''}`} 
                            data-id="product-category6"
                            onClick={() => setActiveMenuOne('product-category6')}
                        />
                        <p className="menu__name">Засоби для чишення</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg7} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category7' ? 'activ' : ''}`} 
                            data-id="product-category7"
                            onClick={() => setActiveMenuOne('product-category7')}
                        />
                        <p className="menu__name">Фарба</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg8} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category8' ? 'activ' : ''}`} 
                            data-id="product-category8"
                            onClick={() => setActiveMenuOne('product-category8')}
                        />
                        <p className="menu__name">Інші аксесуари</p>
                    </div>

                    
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default Care;