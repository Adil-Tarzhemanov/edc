import { Link } from 'react-scroll';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <>
            <header>
                <div className={styles.logoWrapper}>
                    <img className={styles.logoImg}
                         src='img/newlogo.png'
                         alt='logo' 
                         height={60}
                         width={72} />
                    <h2 className={styles.logoText}>EDEN <br /> COMPANY</h2>
                </div>
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
                    {/* <li>
                        <Link
                            to="portfolio"
                            smooth
                            offset={-100}
                            duration={500}
                        >
                            Портфолио
                        </Link>
                    </li> */}
                </ul>
                <div className={styles.connectionWrapper}>
                    <p>Связаться с нами</p>
                    <h4>
                        <a href="tel:(+998 (77) 071-20-37)">
                            +998 (77) 071-20-37
                        </a>
                    </h4>
                </div>
            </header>
        </>
    );
};
