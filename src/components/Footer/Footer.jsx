import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import styles from './Footer.module.scss';

export const Footer = ({ setActiveModal }) => {
    const size = UseWindowSize();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 onClick={() => setActiveModal(true)}>Начать проект</h2>
                {size.width > 1300 && (
                    <div>
                        <img
                            src="img/Ellipse1.png"
                            className={`${styles.ellipse1} ${styles.ellipse}`}
                        />
                        <img
                            src="img/Ellipse2.png"
                            className={`${styles.ellipse2} ${styles.ellipse}`}
                        />
                        <img
                            src="img/Ellipse3.png"
                            className={`${styles.ellipse3} ${styles.ellipse}`}
                        />
                        <img
                            src="img/Ellipse4.png"
                            className={`${styles.ellipse4} ${styles.ellipse}`}
                        />
                        <img
                            src="img/Ellipse5.png"
                            className={`${styles.ellipse5} ${styles.ellipse}`}
                        />
                        <img
                            src="img/Ellipse6.png"
                            className={`${styles.ellipse6} ${styles.ellipse}`}
                        />
                        <img
                            src="img/Ellipse7.png"
                            className={`${styles.ellipse7} ${styles.ellipse}`}
                        />
                    </div>
                )}
                <div className={styles.textWrapper}>
                    <h3>© 2022 Eden Company, All Rights Reserved.</h3>
                    <div className={styles.imgWrapper}>
                        <img src="img/instagram.svg" width={25} />
                        <img src="img/linkedin.svg" width={25} />
                        <img src="img/twitter.svg" width={25} />
                        <img src="img/facebook.svg" width={25} />
                    </div>
                </div>
            </div>
        </footer>
    );
};
