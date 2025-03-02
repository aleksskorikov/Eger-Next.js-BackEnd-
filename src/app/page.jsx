import styles from "../styles/scss/page.module.scss"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import MarqueeСontent from "@/components/mainContent/marqueeСontent";
import HomeNav from "@/components/mainContent/homeNav";
import Hunting from "@/components/mainContent/hanting";
import Fishing from "@/components/mainContent/fishing";
import Weapon from "@/components/mainContent/weapon";
import Tourizm from "@/components/mainContent/tourizm";
import OllAll from "@/components/OllAll";
// import Mail from "@/components/Mail";


export default function Home() {
  return (
  
    <div className={styles.main} >
      <Header />
      <main >
        <div className={styles.container}>
          <MarqueeСontent children={" Ласкаво просимо до нашого магазину полювання, риболовлі, туризму, зброї та комплектуючих! Ми пропонуємо найкращі товари для ваших пригод!"}/>
          <HomeNav />
          <Hunting />
          <Fishing/>
          <Weapon />
          <Tourizm />
        </div>
      </main>
      <Footer />
      <OllAll />
      {/* <Mail/> */}
    </div>
  );
}
