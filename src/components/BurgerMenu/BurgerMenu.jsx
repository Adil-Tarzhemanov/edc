import { useState } from 'react';
import { Menu } from '../Menu/Menu.jsx';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({ activeModal, setActiveModal }) => {
    const [menuActive, setMenuActive] = useState(false);

    const items = [
        { value: 'Главная', to: 'home' },
        { value: 'Услуги', to: 'services' },
        { value: 'О нас', to: 'aboutUs' },
        { value: 'Портфолио', to: 'portfolio' },
    ];

    return (
        <div className={styles.mobileHeader}>
            <nav>
                <div
                    className={styles.burgerBtn}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span />
                </div>
            </nav>
            <Menu
                items={items}
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
            />
        </div>
    );
};
