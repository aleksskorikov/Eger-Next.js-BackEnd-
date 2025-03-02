import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/hunting accessories.jpg";
import MenuImg1 from "../assets/images/menu img/hunting accessories1.jpg";
import MenuImg2 from "../assets/images/menu img/hunting accessories2.jpg";
import MenuImg3 from "../assets/images/menu img/hunting accessories3.jpg";
import MenuImg4 from "../assets/images/menu img/hunting accessories4.jpg";
import ProductSlider from '../../app/pages/components/productSlider';
import ProductCard from "../../app/pages/components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../../app/pages/components/oll-all';
import Mail from '../../app/pages/components/mail';
import ToMainBtn from '../../app/pages/components/toMainBtn';

const Hunting_accessories = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'hunting_accessories';

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">мисливськи аксесуари</h1>
                <div className="menu__one" id="menu-one">
                    <div className="menu__items">
                        <img 
                            src={MenuImg} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'all' ? 'activ' : ''}`} 
                            data-id="all"
                            onClick={() => setActiveMenuOne('all')}
                        />
                        <p className="menu__name">мисливськи аксесуари</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg1} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`} 
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">Опудала</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg2} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`} 
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Горни</p>
                    </div>
                        <div className="menu__items">
                        <img 
                            src={MenuImg3} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`} 
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">Маскування</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg4} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category4' ? 'activ' : ''}`} 
                            data-id="product-category4"
                            onClick={() => setActiveMenuOne('product-category4')}
                        />
                        <p className="menu__name">Радіостанціі</p>
                    </div>
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default Hunting_accessories;