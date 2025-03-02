import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/closAll.jpg";
import MenuImg1 from "../assets/images/menu img/clos.jpg";
import MenuImg2 from "../assets/images/menu img/clos1.jpg";
import MenuImg3 from "../assets/images/menu img/clos2.jpg";
import MenuImg4 from "../assets/images/menu img/clos3.jpg";
import MenuImg5 from "../assets/images/menu img/closs.jpg";
import MenuImg6 from "../assets/images/menu img/clos4.jpg";
import MenuImg7 from "../assets/images/menu img/clos5.jpg";
import MenuImg8 from "../assets/images/menu img/clos6.jpg";
import MenuImg9 from "../assets/images/menu img/clos8.jpg";
import ProductSlider from '../Components/productSlider';
import ProductCard from "../Components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../Components/oll-all';
import Mail from '../Components/mail';
import ToMainBtn from '../Components/toMainBtn';


const Cloth = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const [activeMenuTwo, setActiveMenuTwo] = useState('all');
    const pageName = 'cloth';

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">ОДЯГ</h1>
                <h2 className="menu__subtitle">Верхній одяг</h2>
                <div className="menu__one" id="menu-one">
                <div className="menu__items">
                        <img
                            src={MenuImg}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuOne === 'all' ? 'activ' : ''}`}
                            data-id="all"
                            onClick={() => setActiveMenuTwo('all')}
                        />
                        <p className="menu__name">Весь одяг</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg1}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`}
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">Куртки</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg2}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`}
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Костюми</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg3}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`}
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">Футболки та джемпера</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg4}
                            alt="Menu"
                            className={`menu__img ${activeMenuOne === 'product-category4' ? 'activ' : ''}`}
                            data-id="product-category4"
                            onClick={() => setActiveMenuOne('product-category4')}
                        />
                        <p className="menu__name">Штани та комбінезони</p>
                    </div>
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

                <h2 className="menu__subtitle">Взуття</h2>
                <div className="menu__one" id="menu-two">
                    <div className="menu__items">
                        <img
                            src={MenuImg5}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'all' ? 'activ' : ''}`}
                            data-id="all"
                            onClick={() => setActiveMenuTwo('all')}
                        />
                        <p className="menu__name">Все взуття</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg6}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two1' ? 'activ' : ''}`}
                            data-id="product-category-two1"
                            onClick={() => setActiveMenuTwo('product-category-two1')}
                        />
                        <p className="menu__name">Черевики</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg7}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two2' ? 'activ' : ''}`}
                            data-id="product-category-two2"
                            onClick={() => setActiveMenuTwo('product-category-two2')}
                        />
                        <p className="menu__name">Чоботи</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg8}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two3' ? 'activ' : ''}`}
                            data-id="product-category-two3"
                            onClick={() => setActiveMenuTwo('product-category-two3')}
                        />
                        <p className="menu__name">Гумові чоботи</p>
                    </div>
                    <div className="menu__items">
                        <img
                            src={MenuImg9}
                            alt="Menu"
                            className={`menu-two__img ${activeMenuTwo === 'product-category-two4' ? 'activ' : ''}`}
                            data-id="product-category-two4"
                            onClick={() => setActiveMenuTwo('product-category-two4')}
                        />
                        <p className="menu__name">Заброди та комбінезони</p>
                    </div>
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuTwo} productCategory="productsTwo" />
            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default Cloth;