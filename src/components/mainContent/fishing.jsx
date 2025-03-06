'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/scss/page.module.scss';

import Rods from '../../../public/images/fishing-foto/fishing rods.jpg';
import Coils from '../../../public/images/fishing-foto/coils.webp';
import Tackle from '../../../public/images/fishing-foto/tackle.jpg';
import Bait from '../../../public/images/fishing-foto/bait.jpg';
import Equipment from '../../../public/images/fishing-foto/equipment.jpg';
import Cloth from '../../../public/images/hanter-foto/cloth.webp';
import Lanterns from '../../../public/images/fishing-foto/lanterns.svg';
import Underwear from '../../../public/images/fishing-foto/thermal underwear.svg';

const Fishing = () => {
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
        { image: Rods, title: 'Вудки', link: '/pages/fishing-rods', items: ['Спінінги', 'Фідери', 'Поплавочні', 'Телескопічні'] },
        { image: Coils, title: 'Котушки', link: '/pages/coils', items: ['Безінерційні', 'Мультиплікаторні', 'Інерційні'] },
        { image: Tackle, title: 'Оснастка', link: '/pages/tackle', items: ['Гачки', 'Повідки', 'Поплавки', 'Грузила'] },
        { image: Bait, title: 'Прикормки', link: '/pages/lure', items: ['Блешні', 'Балансири', 'Воблери', 'Силікон', 'Діпи', 'Прикормки' ] },
        { image: Equipment, title: 'Аксесуари', link: '/pages/equipment', items: ['Підсаки', 'Садки', 'Коробки'] },
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
        { image: Lanterns, title: 'Ліхтарі', link: '/pages/lanterns', items: ['Налобні', 'Ручні', 'Кемпінгові'] },
        { image: Underwear, title: 'Термобілизна', link: '/pages/thermal-underwear', items: ['Комплекти', 'Футболки', 'Штани'] }
    ];

    return (
        <section className={styles.section} id="section-hunting">
            <h3 className={styles.sectionTitle}>Полювання</h3>
            <div className={styles.sectionInfo}>
                <div className={`${styles.sectionFoto} ${styles.fishing}`}></div>
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

export default Fishing;

