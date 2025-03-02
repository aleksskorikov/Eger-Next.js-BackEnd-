import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/equipments.jpg";
import MenuImg1 from "../assets/images/menu img/equipments1.jpg";
import MenuImg2 from "../assets/images/menu img/equipments2.jpg";
import MenuImg3 from "../assets/images/menu img/equipments3.jpg";
import MenuImg4 from "../assets/images/menu img/equipments4.jpg";
import MenuImg5 from "../assets/images/menu img/equipments5.jpg";
import MenuImg6 from "../assets/images/menu img/equipments6.jpg";
import MenuImg7 from "../assets/images/menu img/equipments7.jpg";
import MenuImg8 from "../assets/images/menu img/equipments8.jpg";
import ProductSlider from '../../app/pages/components/productSlider';
import ProductCard from "../../app/pages/components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../../app/pages/components/oll-all';
import Mail from '../../app/pages/components/mail';
import ToMainBtn from '../../app/pages/components/toMainBtn';

const Equipments = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');
    const pageName = 'equipments';

return (
<>
    <ProductSlider />
    <ToMainBtn />
    <div className="menu">
        <h1 className="menu__title">Екіпірування</h1>
        <div className="menu__one" id="menu-one">
            <div className="menu__items">
                <img src={MenuImg} alt="Menu" className={`menu__img ${activeMenuOne==='all' ? 'activ' : '' }`}
                    data-id="all" onClick={()=> setActiveMenuOne('all')}
                />
                <p className="menu__name">Все Екіпірування</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg1} alt="Menu" className={`menu__img ${activeMenuOne==='product-category1' ? 'activ' : ''
                    }`} data-id="product-category1" onClick={()=> setActiveMenuOne('product-category1')}
                />
                <p className="menu__name">Розвантажувальні та бронежелети</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg2} alt="Menu" className={`menu__img ${activeMenuOne==='product-category2' ? 'activ' : ''
                    }`} data-id="product-category2" onClick={()=> setActiveMenuOne('product-category2')}
                />
                <p className="menu__name">Страхувальні желети</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg3} alt="Menu" className={`menu__img ${activeMenuOne==='product-category3' ? 'activ' : ''
                    }`} data-id="product-category3" onClick={()=> setActiveMenuOne('product-category3')}
                />
                <p className="menu__name">Бронепластини</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg4} alt="Menu" className={`menu__img ${activeMenuOne==='product-category4' ? 'activ' : ''
                    }`} data-id="product-category4" onClick={()=> setActiveMenuOne('product-category4')}
                />
                <p className="menu__name">Шоломи</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg5} alt="Menu" className={`menu__img ${activeMenuOne==='product-category5' ? 'activ' : ''
                    }`} data-id="product-category5" onClick={()=> setActiveMenuOne('product-category5')}
                />
                <p className="menu__name">Налокітники та наколінники</p>
            </div>
            <div className="menu__items">
                <img src={MenuImg6} alt="Menu" className={`menu__img ${activeMenuOne==='product-category6' ? 'activ' : ''
                    }`} data-id="product-category6" onClick={()=> setActiveMenuOne('product-category6')}
                />
                <p className="menu__name">Навушники та беруші</p>
                </div>
                            <div className="menu__items">
                <img src={MenuImg7} alt="Menu" className={`menu__img ${activeMenuOne==='product-category7' ? 'activ' : ''
                    }`} data-id="product-category7" onClick={()=> setActiveMenuOne('product-category7')}
                />
                <p className="menu__name">Окуляри</p>
                </div>
                            <div className="menu__items">
                <img src={MenuImg8} alt="Menu" className={`menu__img ${activeMenuOne==='product-category8' ? 'activ' : ''
                    }`} data-id="product-category8" onClick={()=> setActiveMenuOne('product-category8')}
                />
                <p className="menu__name">Підсумки</p>
            </div>
        </div>

        <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

    </div>
    <OllAll />
    <Mail />
</>
);
};

export default Equipments;