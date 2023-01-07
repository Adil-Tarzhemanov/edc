import { Link } from 'react-scroll';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to="home" smooth offset={-100} duration={500}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to="services" smooth offset={-100} duration={500}>
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link to="aboutUs" smooth offset={-100} duration={500}>
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="portfolio"
                            smooth
                            offset={-100}
                            duration={500}
                        >
                            Портфолио
                        </Link>
                    </li>
                </ul>
                <div className={styles.connectionWrapper}>
                    <p>Связаться с нами</p>
                    <h4>
                        <a href="tel:(+998 (95) 097-20-37)">
                            +998 (95) 097-20-37
                        </a>
                    </h4>
                </div>
            </header>
        </>
    );
};
