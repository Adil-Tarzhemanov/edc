import { useState } from 'react';
import { Menu } from '../Menu/Menu.jsx';
import styles from './BurgerMenu.module.scss';
import { useTranslation } from 'react-i18next';

export const BurgerMenu = ({ activeModal, setActiveModal }) => {
    const [menuActive, setMenuActive] = useState(false);

    const { t } = useTranslation();

    const items = [
        { value: t("home"), to: 'home' },
        { value: t("services"), to: 'services' },
        { value: t("aboutUs"), to: 'aboutUs' },
        // { value: 'Портфолио', to: 'portfolio' },
    ];

    return (
        <div className={styles.mobileHeader}>
            <nav className={menuActive ? styles.active : ''}>
                <div className={styles.connectionWrapper}>
                    <p>{t("contactUs")}</p>
                    <h4>
                        <a href="tel:(+998 (77) 071-20-37)">
                            +998 (77) 071-20-37
                        </a>
                    </h4>
                </div>
                <div className={styles.btnWrapper}>
                    <div
                        className={styles.burgerBtn}
                        onClick={() => setMenuActive(!menuActive)}
                    >
                        <span className={styles.span1} />
                        <span className={styles.span2} />
                        <span className={styles.span3} />
                    </div>
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
