import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/dishes.jpg";
import MenuImg1 from "../assets/images/menu img/dishes1.jpg";
import MenuImg2 from "../assets/images/menu img/dishes2.jpg";
import MenuImg3 from "../assets/images/menu img/dishes3.jpg";
import ProductSlider from '../../app/pages/components/productSlider';
import ProductCard from "../../app/pages/components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../../app/pages/components/oll-all';
import Mail from '../../app/pages/components/mail';
import ToMainBtn from '../../app/pages/components/toMainBtn';

const Dishes = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'dishes';

return (
<>
    <ProductSlider />
    <ToMainBtn />
    <div className="menu">
        <h1 className="menu__title">Кухня та посуд</h1>
        <div className="menu__one" id="menu-one">
            <div className="menu__items">
                <img src={MenuImg} alt="Menu" className={`menu__img ${activeMenuOne==='all' ? 'activ' : '' }`}
                    data-id="all" onClick={()=> setActiveMenuOne('all')}
                />
                <p className="menu__name">Кухня та посуд</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg1} alt="Menu" className={`menu__img ${activeMenuOne==='product-category1' ? 'activ' : ''
                    }`} data-id="product-category1" onClick={()=> setActiveMenuOne('product-category1')}
                />
                <p className="menu__name">Пальники</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg2} alt="Menu" className={`menu__img ${activeMenuOne==='product-category2' ? 'activ' : ''
                    }`} data-id="product-category2" onClick={()=> setActiveMenuOne('product-category2')}
                />
                <p className="menu__name">Термопродукція</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg3} alt="Menu" className={`menu__img ${activeMenuOne==='product-category3' ? 'activ' : ''
                    }`} data-id="product-category3" onClick={()=> setActiveMenuOne('product-category3')}
                />
                <p className="menu__name">Туристичний посуд</p>
            </div>
        </div>

        <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

    </div>
    <OllAll />
    <Mail />
</>
);
};

export default Dishes;
