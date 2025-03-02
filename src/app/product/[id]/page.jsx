"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/scss/product.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeСontent from "@/components/mainContent/marqueeСontent";
import BackToMenuBtn from "@/components/btns/backTuMenuBtn";
import BuyBtn from "@/components/btns/buyBtn";

const Product = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 800, settings: { slidesToShow: 1 } },
            { breakpoint: 541, settings: { slidesToShow: 1, arrows: false } },
        ],
    };

    useEffect(() => {
        if (!id) return;

        axios.get(`/api/products?id=${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
                console.log("📌 Найден товар:", response.data);
            })
            .catch(error => {
                console.error("Ошибка при загрузке товара:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Завантаження...</div>;
    if (!product) return <div>Товар не знайдено</div>;

    const images = Object.keys(product)
        .filter(key => key.startsWith("img"))
        .map(key => product[key]);
    

    
    // const images = Object.keys(product)
//     .filter(key => key.startsWith("img") && product[key]) // Исключаем пустые значения
    //     .map(key => product[key]);
    
//     const images = Object.keys(product)
//     .filter(key => key.startsWith("img") && product[key]) // Исключаем пустые значения
//     .map(key => product[key]);

// // Если нет изображений, добавляем заглушку
// const validImages = images.length > 0 ? images : [];

    return (
        <div className={styles.productWrapper}>
            <Header />
            <div className={styles.container}>
                <BackToMenuBtn />
                <Slider {...settings} className={styles.productSlider}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.productSliderItem}>
                            <img src={image} alt={`Slide ${index}`} className={styles.productSliderImage} />
                        </div>
                    ))}
                </Slider>
                <h2 className={styles.productsName}>{product.name}</h2>
                <div className={styles.productsDescription}>
                    {product.description}
                    <ol className={styles.productLists}>
                        {Object.keys(product)
                            .filter(key => key.startsWith("list") && product[key])
                            .map((key, index) => (
                                <li key={index} className={styles.productList}>{product[key]}</li>
                            ))}
                    </ol>
                </div>
                <p className={styles.productsPrice}>Ціна: {product.price} грн</p>
            </div>
            <BuyBtn />
            <MarqueeСontent wrapperClassName={styles.customWrapper} contentClassName={styles.customContent}>
                УВАГА!!!!! Наявність товару та ціну будь ласка уточнюйте у продавця!
            </MarqueeСontent>
            <Footer />
        </div>
    );
};

const PrevArrow = ({ className, style, onClick }) => (
    <div className={`${styles.slickArrow} ${styles.slickPrev} ${className}`} style={{ ...style }} onClick={onClick}>
        &lt;
    </div>
);

const NextArrow = ({ className, style, onClick }) => (
    <div className={`${styles.slickArrow} ${styles.slickNext} ${className}`} style={{ ...style }} onClick={onClick}>
        &gt;
    </div>
);

export default Product;







