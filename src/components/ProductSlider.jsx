'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/scss/_productSlider.module.scss';

const settings = {
    dots: false,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
};

const ProductSlider = ({ images }) => {
    return (
        <Slider {...settings} className={styles.slider}>
            {images.map((src, index) => (
                <div key={index} className={styles.slideItem}>
                    <Image src={src} alt={`Slide ${index + 1}`} width={800} height={500} priority />
                </div>
            ))}
        </Slider>
    );
};

export default ProductSlider;
