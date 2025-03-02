import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/acsesuars.jpg";
import MenuImg1 from "../assets/images/menu img/acsesuars1.jpg";
import MenuImg2 from "../assets/images/menu img/acsesuars2.jpg";
import MenuImg3 from "../assets/images/menu img/acsesuars3.jpg";
import MenuImg4 from "../assets/images/menu img/acsesuars4.jpg";
import MenuImg5 from "../assets/images/menu img/acsesuars5.jpg";
import MenuImg6 from "../assets/images/menu img/acsesuars6.jpg";
import MenuImg7 from "../assets/images/menu img/acsesuars7.jpg";
import MenuImg8 from "../assets/images/menu img/acsesuars8.jpg";
import ProductSlider from '../Components/productSlider';
import ProductCard from "../Components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../Components/oll-all';
import Mail from '../Components/mail';
import ToMainBtn from '../Components/toMainBtn';

const accessories = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'accessories';

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">аксесуари</h1>
                <div className="menu__one" id="menu-one">
                    <div className="menu__items">
                        <img 
                            src={MenuImg} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'all' ? 'activ' : ''}`} 
                            data-id="all"
                            onClick={() => setActiveMenuOne('all')}
                        />
                        <p className="menu__name">Всі аксесуари</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg1} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`} 
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">Кейси</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg2} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`} 
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Чохли</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg3} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`} 
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">Підсумки</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg4} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category4' ? 'activ' : ''}`} 
                            data-id="product-category4"
                            onClick={() => setActiveMenuOne('product-category4')}
                        />
                        <p className="menu__name">Коробки для патронів</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg5} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category5' ? 'activ' : ''}`} 
                            data-id="product-category5"
                            onClick={() => setActiveMenuOne('product-category5')}
                        />
                        <p className="menu__name">Обкладинки на документі</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg6} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category6' ? 'activ' : ''}`} 
                            data-id="product-category6"
                            onClick={() => setActiveMenuOne('product-category6')}
                        />
                        <p className="menu__name">Патронташі</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg7} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category7' ? 'activ' : ''}`} 
                            data-id="product-category7"
                            onClick={() => setActiveMenuOne('product-category7')}
                        />
                        <p className="menu__name">Фіксатори патронів</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg8} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category8' ? 'activ' : ''}`} 
                            data-id="product-category8"
                            onClick={() => setActiveMenuOne('product-category8')}
                        />
                        <p className="menu__name">Ремені збройові</p>
                    </div>

                    
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default accessories;