import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import styles from './Footer.module.scss';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = ({ setActiveModal }) => {
    const size = UseWindowSize();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 onClick={() => setActiveModal(true)}>Начать проект</h2>
                {/* {size.width > 1300 && ( */}
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
                 {/* )} */}
                <div className={styles.textWrapper}>
                    <h3>© 2022 Eden Company, All Rights Reserved.</h3>
                    <div className={styles.imgWrapper}>
                        <InstagramIcon className={styles.socialMedia} sx={{ fontSize: 30 }} />
                        <LinkedInIcon  className={styles.socialMedia} sx={{ fontSize: 30 }} />
                        <TwitterIcon  className={styles.socialMedia} sx={{ fontSize: 30 }} />
                        <FacebookIcon  className={styles.socialMedia} sx={{ fontSize: 30 }} />
                    </div>
                </div>
            </div>
        </footer>
    );
};
