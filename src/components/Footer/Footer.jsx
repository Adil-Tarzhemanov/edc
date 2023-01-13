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
                {size.width > 1300 ? (
                    <div className={styles.circleWrapper}>
                        <img
                            src="img/Ellipse1.png"
                            className={`${styles.ellipse1} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/Ellipse2.png"
                            className={`${styles.ellipse2} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/Ellipse3.png"
                            className={`${styles.ellipse3} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/Ellipse4.png"
                            className={`${styles.ellipse4} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/Ellipse5.png"
                            className={`${styles.ellipse5} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/Ellipse6.png"
                            className={`${styles.ellipse6} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/Ellipse7.png"
                            className={`${styles.ellipse7} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                    </div>
                ) : (
                    <div className={styles.circleWrapper1}>
                        <img
                            src="img/pathEllipse/Ellipse1.png"
                            className={`${styles.ellipse11} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/pathEllipse/Ellipse2.png"
                            className={`${styles.ellipse22} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/pathEllipse/Ellipse3.png"
                            className={`${styles.ellipse33} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                         <img
                            src="img/pathEllipse/Ellipse4.png"
                            className={`${styles.ellipse44} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                       <img
                            src="img/pathEllipse/Ellipse5.png"
                            className={`${styles.ellipse55} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                         <img
                            src="img/pathEllipse/Ellipse6.png"
                            className={`${styles.ellipse66} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                        <img
                            src="img/pathEllipse/Ellipse7.png"
                            className={`${styles.ellipse77} ${styles.ellipse}`}
                            alt='ellipse'
                        />
                    </div>
                )}
                <div className={styles.textWrapper}>
                    <h3>© 2022 Eden Company, All Rights Reserved.</h3>
                    <div className={styles.imgWrapper}>
                        <a href='https://instagram.com/edencompanytech?igshid=YmMyMTA2M2Y='
                           target='_blank'>
                            <InstagramIcon className={styles.socialMedia} sx={{ fontSize: 30 }} />
                        </a>
                        <a href='https://www.linkedin.com/in/eden-company-569403239/'
                           target='_blank'>
                            <LinkedInIcon  className={styles.socialMedia} sx={{ fontSize: 30 }} />
                        </a>
                        <a href='https://twitter.com/edencompanytech?s=11&t=6YF-bsHP83f_2SbYyvBzjw'
                           target='_blank'>
                            <TwitterIcon  className={styles.socialMedia} sx={{ fontSize: 30 }} />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100089154881151&is_tour_completed=true'
                           target='_blank'>
                            <FacebookIcon  className={styles.socialMedia} sx={{ fontSize: 30 }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
