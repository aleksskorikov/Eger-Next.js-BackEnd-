// import React, { useState } from 'react';
// import MenuImg from "../assets/images/menu img/bullets.jpg";
// import MenuImg1 from "../assets/images/menu img/bullets1.jpg";
// import MenuImg3 from "../assets/images/menu img/bullets3.jpg";
// import MenuImg4 from "../assets/images/menu img/bullets4.jpg";
// import MenuImg5 from "../assets/images/menu img/bullets5.jpg";
// import ProductSlider from '../Components/productSlider';
// import ProductCard from "../Components/productCard";
// import "../styles/scss/_productPages.scss";
// import OllAll from '../Components/oll-all';
// import Mail from '../Components/mail';
// import ToMainBtn from '../Components/toMainBtn';

// const Bullets = () => {
//     const [activeMenuOne, setActiveMenuOne] = useState('all');
//     const pageName = 'bullets';

// return (
// <>
//     <ProductSlider />
//     <ToMainBtn />
//     <div className="menu">
//         <h1 className="menu__title">набої</h1>
//         <div className="menu__one" id="menu-one">
//             <div className="menu__items">
//                 <img src={MenuImg} alt="Menu" className={`menu__img ${activeMenuOne==='all' ? 'activ' : '' }`}
//                     data-id="all" onClick={()=> setActiveMenuOne('all')}
//                 />
//                 <p className="menu__name">Всі набої</p>
//             </div>
//             <div className="menu__items">
//                 <img src={MenuImg1} alt="Menu" className={`menu__img ${activeMenuOne==='product-category1' ? 'activ' : ''
//                     }`} data-id="product-category1" onClick={()=> setActiveMenuOne('product-category1')}
//                 />
//                 <p className="menu__name">Патрони</p>
//             </div>
//             <div className="menu__items">
//                 <img src={MenuImg3} alt="Menu" className={`menu__img ${activeMenuOne==='product-category2' ? 'activ' : ''
//                     }`} data-id="product-category2" onClick={()=> setActiveMenuOne('product-category2')}
//                 />
//                 <p className="menu__name">Пневматичні патрони</p>
//             </div>
//             <div className="menu__items">
//                 <img src={MenuImg4} alt="Menu" className={`menu__img ${activeMenuOne==='product-category3' ? 'activ' : ''
//                     }`} data-id="product-category3" onClick={()=> setActiveMenuOne('product-category3')}
//                 />
//                 <p className="menu__name">Патрони Флобера</p>
//             </div>
//             <div className="menu__items">
//                 <img src={MenuImg5} alt="Menu" className={`menu__img ${activeMenuOne==='product-category4' ? 'activ' : ''
//                     }`} data-id="product-category4" onClick={()=> setActiveMenuOne('product-category4')}
//                 />
//                 <p className="menu__name">Стріли</p>
//             </div>
//         </div>

//         <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

//     </div>
//     <OllAll />
//     <Mail />
// </>
// );
// };

// export default Bullets;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page