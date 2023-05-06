import { useState } from "react";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu"
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"
import { UseWindowSize } from "../../components/hooks/UseWindowSize/UseWindowSize";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { Quality } from "../../components/Quality/Quality";
import { Services } from "../../components/Services/Services";
import styles from './Home.module.scss';
import { Reviews } from "../../components/Reviews/Reviews";

export const Home = () => {
    const [activeModal, setActiveModal] = useState(false);
    const size = UseWindowSize();

    return (
        <>
            {size.width >= 1100 ? (
                <Header />
            ) : (
                <BurgerMenu
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            )}
            <img id="home" src="img/MainRobots/HomeRobot.gif" 
                className={styles.robotRiveUp} 
                alt="robot" />
            {/* <iframe 
                id='home'
                className={styles.robotRiveUp} 
                src="https://rive.app/s/LG2GRg2Q7kqrQq2EoliAjg/embed"
                title='robot' allowfullscreen>
            </iframe> */}
            <Services />
            <AboutUs setActiveModal={setActiveModal} />
            <Quality />
            {/* <Portfolio /> */}
            {/* <Trust /> */}
            <Reviews />
            <Footer setActiveModal={setActiveModal} />
            {activeModal && <ModalWindow setActiveModal={setActiveModal} />}
        </>
    )
}