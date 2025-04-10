"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./_product.module.scss";
import MarqueeСontent from "@/components/mainContent/MarqueeСontent/marqueeСontent";
import BackToMenuBtn from "@/components/btns/BackTuMenuBtn/backTuMenuBtn";
import BuyBtn from "@/components/btns/BuyBtn/buyBtn";

const Product = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (!id) return;

        axios.get(`/api/products?id=${id}`)
            .then(response => {
                const productData = response.data;
                setProduct(productData);
                setLoading(false);

                const productImages = Object.keys(productData)
                    .filter(key => key.startsWith("img") && productData[key])
                    .map(key => productData[key]);
                setImages(productImages);
            })
            .catch(error => {
                console.error("Ошибка при загрузке товара:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Завантаження...</div>;
    if (!product) return <div>Товар не знайдено</div>;

    const settings = {
        dots: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: images.length > 1,
        nextArrow: images.length > 1 ? <NextArrow key="next" /> : null,
        prevArrow: images.length > 1 ? <PrevArrow key="prev" /> : null,
        responsive: [
            { breakpoint: 1270, settings: { slidesToShow: 1 } },
            { breakpoint: 800, settings: { slidesToShow: 1 } },
            { breakpoint: 541, settings: { slidesToShow: 1, arrows: false } },
        ],
    };

    return (
        <>
            <div className={styles.container}>
                <BackToMenuBtn />
                <h2 className={styles.productsName}>{product.name}</h2>
                <p className={styles.description}>{product.description}</p> 
                <div className={styles.productCard}>
                    {images.length > 0 ? (
                    <Slider key={images.length} {...settings} className={styles.productSlider}>
                            {images.map((image, index) => (
                                <div key={index} className={styles.productSliderItem}>
                                    <img src={image} alt={`Slide ${index}`} className={styles.productSliderImage} />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p className={styles.noImage}>Зображення відсутні</p>
                    )}
                    <div className={styles.cardDesckription}>
                            <div className={styles.productsDescription}>
                                <ol className={styles.productLists}>
                                    {Object.keys(product)
                                        .filter(key => key.startsWith("list") && product[key])
                                        .map((key, index) => (
                                            <li key={index} className={styles.productList}>{product[key]}</li>
                                        ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p className={styles.productsPrice}>Ціна: {product.price} грн</p>
                    <BuyBtn />
                </div>
            <MarqueeСontent wrapperClassName={styles.customWrapper} contentClassName={styles.customContent}>
                УВАГА!!!!! Наявність товару та ціну будь ласка уточнюйте у продавця!
            </MarqueeСontent>
        </>
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
