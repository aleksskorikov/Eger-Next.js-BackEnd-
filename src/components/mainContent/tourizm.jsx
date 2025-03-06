'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../../styles/scss/page.module.scss";

import Tents from '../../../public/images/tourizm-foto/tents.jpg';
import Backpacks from '../../../public/images/tourizm-foto/backpacks.webp';
import Dishes from '../../../public/images/tourizm-foto/dishes.jpg';
import Lanterns from '../../../public/images/fishing-foto/lanterns.svg';
import Underwear from '../../../public/images/fishing-foto/thermal underwear.svg';

const Tourism = () => {
    const router = useRouter();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 800, settings: { slidesToShow: 1 } },
            { breakpoint: 541, settings: { slidesToShow: 1, arrows: false } },
        ],
    };

    const categories = [
        { image: Tents, title: 'Бівак', link: '/pages/bivouac', items: ['Складні меблі', 'Намети', 'Спальні мішки', 'Килимки та каремати', 'Подушки', 'Гігієна'] },
        { image: Backpacks, title: 'Сумки та рюкзаки', link: '/pages/backpacks', items: ['Сумки', 'Підсумки', 'Рюкзаки', 'Чохли для спорядження', 'Гермопродукція'] },
        { image: Dishes, title: 'Кухня та посуд', link: '/pages/dishes', items: ['Пальники', 'Термопродукція', 'Туристичний посуд'] },
        { image: Lanterns, title: 'Ліхтарі', link: '/pages/lanterns', items: ['Комплектуючі для ліхтарів', 'Налобні ліхтарі', 'Ручні ліхтарі', 'Кемпенгові ліхтарі', 'Ліхтарі зброї', 'Елементи живлення'] },
        { image: Underwear, title: 'Термобілизна', link: '/pages/thermal-underwear', items: ['Термобілизна', 'Шкарпетки', 'Головні убори', 'Нашивки', 'Рукавички', 'Пояси'] }
    ];

    return (
        <section className={styles.section} id="section-tourism">
            <h3 className={styles.sectionTitle}>Туризм</h3>
            <div className={styles.sectionInfo}>
                <div className={`${styles.sectionFoto} ${styles.tourism }`}></div>
                <div className={styles.sectionText}>
                    Туризм дає можливість познайомитися з культурою інших країн та регіонів, задовольняє допитливість людини, збагачує її духовно, оздоровлює фізично, сприяє розвитку особистості. Він дозволяє поєднувати відпочинок із пізнанням нового.
                </div>
            </div>
            <Slider {...settings} className={styles.slider}>
                {categories.map((item, index) => (
                    <div className={styles.menu} key={index} onClick={() => router.push(item.link)}>
                        <div className={styles.front}>
                            <Image src={item.image} alt={item.title} width={300} height={200} />
                            <p className={styles.frontTitle}>{item.title}</p>
                        </div>
                        <div className={styles.back}>
                            <p><Link href={item.link} className={styles.backTitle}>{item.title}</Link></p>
                            <ul>
                                {item.items.map((subItem, idx) => (
                                    <li key={idx}><Link href={item.link} className={styles.backList}>{subItem}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
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

export default Tourism;


