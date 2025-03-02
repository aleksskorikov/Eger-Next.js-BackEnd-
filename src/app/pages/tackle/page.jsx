import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/tackle.jpg";
import MenuImg1 from "../assets/images/menu img/tackle1.jpg";
import MenuImg2 from "../assets/images/menu img/tackle2.jpg";
import MenuImg3 from "../assets/images/menu img/tackle3.jpg";
import MenuImg4 from "../assets/images/menu img/tackle4.jpg";
import MenuImg5 from "../assets/images/menu img/tackle5.jpg";
import MenuImg6 from "../assets/images/menu img/tackle6.jpg";
import MenuImg7 from "../assets/images/menu img/tackle7.jpg";
import ProductSlider from '../Components/productSlider';
import ProductCard from "../Components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../Components/oll-all';
import Mail from '../Components/mail';
import ToMainBtn from '../Components/toMainBtn';

const Tackle = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'tackle';

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">снасті</h1>
                <div className="menu__one" id="menu-one">
                    <div className="menu__items">
                        <img 
                            src={MenuImg} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'all' ? 'activ' : ''}`} 
                            data-id="all"
                            onClick={() => setActiveMenuOne('all')}
                        />
                        <p className="menu__name">Всі снасті</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg1} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`} 
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">Готові монтажі</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg2} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`} 
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Гачки</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg3} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`} 
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">Грузила</p>
                    </div>
                        <div className="menu__items">
                        <img 
                            src={MenuImg4} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category4' ? 'activ' : ''}`} 
                            data-id="product-category4"
                            onClick={() => setActiveMenuOne('product-category4')}
                        />
                        <p className="menu__name">Джиг - головки</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg5} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category5' ? 'activ' : ''}`} 
                            data-id="product-category5"
                            onClick={() => setActiveMenuOne('product-category5')}
                        />
                        <p className="menu__name">Годівниці</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg6} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category6' ? 'activ' : ''}`} 
                            data-id="product-category6"
                            onClick={() => setActiveMenuOne('product-category6')}
                        />
                        <p className="menu__name">Поплавки</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg7} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category7' ? 'activ' : ''}`} 
                            data-id="product-category7"
                            onClick={() => setActiveMenuOne('product-category7')}
                        />
                        <p className="menu__name">Карабіни та застібки</p>
                    </div>
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default Tackle;