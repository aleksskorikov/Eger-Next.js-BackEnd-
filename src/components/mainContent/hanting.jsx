'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../../styles/scss/page.module.scss";

import Guns from "../../../public/images/hanter-foto/guns.webp";
import Cartridges from '../../../public/images/hanter-foto/cartridges.webp';
import Accessories from '../../../public/images/hanter-foto/accessories.webp';
import Knives from '../../../public/images/hanter-foto/knives.svg';
import Cloth from '../../../public/images/hanter-foto/cloth.webp';
import Care from '../../../public/images/hanter-foto/care.webp';
import Stuffed from '../../../public/images/hanter-foto/stuffed animals.webp';
import Target from '../../../public/images/hanter-foto/target.webp';

const Hunting = () => {
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
        {
            image: Guns,
            title: 'Ружья',
            link: '/pages/guns',
            categories: [
                {
                    subtitle: "Нарезные",
                    items: ['Напівавтомотичні', 'Штуцери', 'З поздовжньо-ковзним затвором', 'Дрібноколіберні'],
                },
                {
                    subtitle: "Гладкоствольные",
                    items: ["Переломні", "Напівавтоматичні", "Помпові", "З продольно-ковзним затвором"],
                }
            ],
        },
        { image: Cartridges, title: 'Патрони', link: '/pages/cartridges', items: ['Дробові патрони', 'Картеч', 'Кульові патрони', 'Нарізні', 'Гладкоствольні'] },
        { image: Accessories, title: 'Аксесуари', link: '/pages/accessories', items: ['Кейси', 'Чохли', 'Підсумки', 'Кобури'] },
        { image: Knives, title: 'Ножі', link: '/pages/knives', items: ['Фіксовані', 'Складні', 'Тренувальна зброя'] },
        {
            image: Cloth,
            title: 'Одяг',
            link: '/pages/cloth',
            categories: [
                {
                    subtitle: "Верхній одяг",
                    items: ["Куртки", "Костюми", "Футболки та джемпера", "Штани та комбінезони"],
                },
                {
                    subtitle: "Взуття",
                    items: ["Черевики" , "Чоботи", "Гумові чоботи" , "Заброди та комбінезони"],
                }
            ],
        },

        { image: Care, title: 'Догляд за зброєю', link: '/pages/care', items: ['Шомполи', 'Набори', 'Протяжки', 'Насадки'] },
        { image: Stuffed, title: 'Мисливські аксесуари', link: '/pages/hunting-accessories', items: ['Вабці', 'Опудала', 'Горни'] },
        { image: Target, title: 'Стрілецькі аксесуари', link: '/pages/shooting-accessories', items: ['Мішені', 'Тарілки', 'Інше'] }
    ];

    return (
        <section className={styles.section} id="section-hunting">
            <h3 className={styles.sectionTitle}>Полювання</h3>
            <div className={styles.sectionInfo}>
                <div className={styles.sectionFoto}></div>
                <div className={styles.sectionText}>
                    Давайте запитаємо себе: - навіщо ми полюємо? І відповімо чесно, 
                    не кривлячи душею, бо обдурити себе неможливо. 
                    Кожен відповість по-різному. Але всіх справжніх мисливців 
                    об'єднує одне – мисливська пристрасть.
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
                            <p>
                                <Link href={item.link} className={styles.backTitle}>{item.title}</Link>
                            </p>
                            {item.categories ? (
                                item.categories.map((subCategory, idx) => (
                                    <div key={idx}>
                                        <p className={styles.subtitle}>{subCategory.subtitle}</p>
                                        <ul>
                                            {subCategory.items.map((subItem, subIdx) => (
                                                <li key={subIdx}>
                                                    <Link href={item.link} className={styles.backList}>{subItem}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            ) : (
                                <ul>
                                    {item.items.map((subItem, idx) => (
                                        <li key={idx}>
                                            <Link href={item.link} className={styles.backList}>{subItem}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
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

export default Hunting;
