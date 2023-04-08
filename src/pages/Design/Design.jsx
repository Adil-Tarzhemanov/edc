import { Header } from "../../components/Header/Header"
import { Main } from "../components/Main/Main"
import { DesServices } from "./DesServices/DesServices"
import styles from './Design.module.scss';
import { Number } from "./Number/Number";
import { Price } from "./Price/Price";

export const Design = () => {
    const mainInfo = {
        head: "Веб-дизайн в Ташкенте",
        text: "Наша компания предоставляет услуги веб-дизайна в Ташкенте и по всему миру, которые помогут вам создать впечатляющий и интуитивно понятный веб-сайт. Наша команда талантливых дизайнеров использует самые современные технологии и инструменты, чтобы создать уникальный дизайн, который будет соответствовать вашему бренду и привлекать больше клиентов.",
        robot: 'img/MainRobots/ServicesRobot.png',
    }

    return (
        <div className={styles.container}>
           <Header />
           <Main head={mainInfo.head}
                  text={mainInfo.text}
                  robot={mainInfo.robot} />  
           <DesServices />
           <Number />
           <Price />
        </div>
    )
}