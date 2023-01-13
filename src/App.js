import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Quality } from './components/Quality/Quality';
import { Reviews } from './components/Reviews/Reviews';
import { Services } from './components/Services/Services';
import { Trust } from './components/Trust/Trust';
import styles from './App.module.scss';

import { useState } from 'react';

import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { UseWindowSize } from './components/hooks/UseWindowSize/UseWindowSize';

function App() {
    const [activeModal, setActiveModal] = useState(false);
    const size = UseWindowSize();

    return (
        <div className={styles.globalContainer}>
            {size.width >= 950 ? (
                <Header />
            ) : (
                <BurgerMenu
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            )}
            <iframe 
                id='home'
                className={styles.robotRiveUp} 
                src="https://rive.app/s/LG2GRg2Q7kqrQq2EoliAjg/embed"
                title='robot' allowfullscreen>
            </iframe>
            <Services />
            <AboutUs setActiveModal={setActiveModal} />
            <Quality />
            <Portfolio />
            <Trust />
            <Reviews />
            <Footer setActiveModal={setActiveModal} />
            {activeModal && (
                <ModalWindow
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            )}
        </div>
    );
}

export default App;
