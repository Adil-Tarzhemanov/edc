import { Header } from '../../components/Header/Header';
import { siteInfo } from '../../data/CartService';
import { CartSite } from '../../components/CartSite/CartSite';
import { Main } from '../components/Main/Main';
import styles from './Site.module.scss';
import { mainInfo } from '../../data/MainInfo';
import { mainInfo1 } from '../../data/MainInfo';

export const Site = () => {
    // const mainInfo = {
    //     head: "Создание сайтов в Ташкенте",
    //     text: "“Eden Company” готова реализовать ваш проект. “Создание сайта в Ташкенте, разработка интернет-магазина в Узбекистане, купить веб сайт в Ташкенте”, работаем с любыми запросами. Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и узнать, как мы можем помочь вам создать качественный сайт для вашего бизнеса или личных целей.",
    //     robot: 'img/MainRobots/ServicesRobot.png',
    // }

    // head={mainInfo.head}
    // text={mainInfo.text}
    // robot={mainInfo.robot}

    return (
        <div className={styles.container}>
            <Header />
            <Main {...mainInfo1['site']} />
            <div className={styles.services}>
                {siteInfo.map(cart => <CartSite cart={cart} />)}
                {/* <div className={styles.first}>
                    
                </div>
                <div className={styles.second}>
                     
                </div> */}
            </div>
        </div>
    )
}