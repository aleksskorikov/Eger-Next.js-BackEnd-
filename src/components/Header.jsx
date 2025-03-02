import Image from "next/image";
import Link from "next/link";
import styles from "../styles/scss/Header.module.scss";

import Logo from "../../public/logo/logo 1.svg";
import Telefon from "../../public/logo/telefon.svg";
import Insta from "../../public/logo/insta 1.svg";
import Viber from "../../public/logo/Viber.svg";
import Telegramm from "../../public/logo/telegram.svg";
import Mail from "../../public/logo/mail 1.svg";

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          {/* Логотип */}
          <div className={styles.logoBlock}>
            <Image
                src={Logo}
                alt="Logo"
                className={styles.logoImg}
            />
          </div>

          {/* Название магазина */}
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>ЄГЕР</h1>
            <h2 className={styles.subtitle}>магазин зброї</h2>
          </div>

          {/* Контактные данные */}
          <div className={styles.itemsBlock}>
            <div className={styles.dataBlock}>
              <p className={styles.city}>м. Запоріжжя</p>
              <p className={styles.address}>вул. Базарна 14б</p>
              <p className={styles.tel}>
                <Image src={Telefon} alt="Телефон"  className={styles.iconTel}/>
                055 555 55 55
              </p>
            </div>

            {/* Соцсети */}
            <div className={styles.socialBlock}>
              <Link href="https://instagram.com/egerzp" target="_blank">
                <Image src={Insta} alt="Instagram"  className={styles.icon}/>
              </Link>
              <Link href="#" target="_blank">
                <Image src={Viber} alt="Viber"  className={styles.icon}/>
              </Link>
              <Link href="https://t.me/egerzp" target="_blank">
                <Image src={Telegramm} alt="Telegram"  className={styles.icon}/>
              </Link>
              <Link href="#" target="_blank">
                <Image src={Mail} alt="Mail" className={`${styles.icon} ${styles.btn}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





