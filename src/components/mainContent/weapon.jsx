'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../../styles/scss/page.module.scss";

import Weapon from "../../../public/images/weapon-foto/weapon.svg";
import Bullets from "../../../public/images/weapon-foto/bullets.svg";
import Accessories from "../../../public/images/weapon-foto/accessories.webp";
import Components from "../../../public/images/weapon-foto/components.webp";
import Knives from "../../../public/images/hanter-foto/knives.svg";
import Tool from "../../../public/images/weapon-foto/tool.webp";
import Equipment from "../../../public/images/weapon-foto/equipment.svg";
import Defense from "../../../public/images/weapon-foto/means of self defense.svg";

const WeaponSection = () => {
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
        { image: Weapon, title: 'Зброя', link: '/pages/gan', items: ['Травматична зброя', 'Пневматична зброя', 'Зброя під патрон Флобер', 'Сигнально-шумова зброя', 'Метальна зброя'] },
        { image: Bullets, title: 'Набої', link: '/pages/bullets', items: ['Патрони', 'Релоадинг', 'Пневматичні патрони', 'Патрони Флобера', 'Стріли'] },
        { image: Accessories, title: 'Аксесуари', link: '/pages/acces', items: ['Зберігання та транспортування', 'Чищення та догляд', 'Стрілецькі аксесуари'] },
        { image: Components, title: 'Комплектуючі', link: '/pages/components', items: ['До зброї', 'Кріплення для оптики', 'Травматична зброя', 'Пневматична зброя', 'Метальна зброя'] },
        { image: Knives, title: 'Ножі', link: '/pages/knives', items: ['Фіксовані', 'Складні ножі', 'Тренувальна зброя', 'Комплектуючі', 'Точильні пристрої'] },
        { image: Tool, title: 'Інструмент', link: '/pages/tool', items: ['Мультитули', 'Мачете', 'Сокири', 'Лопати', 'Пили', 'Спецінструмент'] },
        { image: Equipment, title: 'Екіпірування', link: '/pages/equipments', items: ['Бронежилети', 'Шоломи', 'Наколінники', 'Навушники', 'Окуляри', 'Підсумки'] },
        { image: Defense, title: 'Засоби самозахисту', link: '/pages/means', items: ['Газові балончики'] }
    ];

    return (
        <section className={styles.section} id="section-weapon">
            <h3 className={styles.sectionTitle}>Зброя та самооборона</h3>
            <div className={styles.sectionInfo}>
                <div className={`${styles.sectionFoto} ${styles.selfDefense}`}></div>
                <div className={styles.sectionText}>
                    На жаль, поліція не завжди може захистити кожного з тих, хто перебуває на території України. Законодавством України передбачено широкі повноваження щодо самостійного здійснення самооборони. Конституція України проголошує, що «людина, її життя, здоров'я, честь та гідність, недоторканність та безпека вважаються в Україні найвищою соціальною цінністю» (ст.3 Конституції).
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
                                <Link href={item.link} className={styles.backTitle}>
                                    {item.title}
                                </Link>
                            </p>
                            <ul>
                                {item.items.map((subItem, idx) => (
                                    <li key={idx}>
                                        <Link href={item.link} className={styles.backList}>
                                            {subItem}
                                        </Link>
                                    </li>
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

export default WeaponSection;
