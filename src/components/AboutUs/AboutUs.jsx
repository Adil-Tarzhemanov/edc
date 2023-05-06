import { Section } from '../Section/Section';
import styles from './AboutUs.module.scss';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import { useTranslation } from 'react-i18next';

export const AboutUs = ({ setActiveModal }) => {

    const size = UseWindowSize();

    const { t } = useTranslation();

    return (
        <div className={styles.container} id="aboutUs">
            {size.width > 1280 ? (
                <div className={styles.wrapper}>
                    <Section
                        className={styles.section}
                        valueText={t("aboutUs")}
                        meteor
                    />
                    <div>
                        <h2 className={styles.h2}>
                            {t("DreamCompany")}
                        </h2>
                    </div>
                    <div>
                        <p className={styles.p}>
                           {t("DreamHeadText")}
                        </p>
                    </div>
                    <div className={styles.btnWrap}>
                        <button
                            className={styles.button} 
                            onClick={() => setActiveModal(true)}
                        >
                            {t("contactUs")}
                        </button>
                    </div>
                    <div>
                        <img
                            src="img/OurTeam.png"
                            alt="team"
                            className={styles.ourTeam}
                        />
                    </div>
                </div>
            ) : (
                <div className={styles.flexWrapper}>
                    <Section
                        className={styles.section2}
                        valueText={t("aboutUs")}
                        meteor
                    />
                    <div>
                        <h2 className={styles.h22}>
                            {t("DreamCompany")}
                        </h2>
                    </div>
                    <div>
                        <p className={styles.p2}>
                            {t("DreamHeadText")}
                        </p>
                    </div>
                    <div>
                    <img
                        src="img/OurTeam.png"
                        alt="team"
                        className={`${styles.ourTeam2} ${styles.appearanceLeft}`}
                        />
                    </div>
                    <button
                        className={`${styles.button2}`}
                        onClick={() => setActiveModal(true)}
                    >
                        {t("contactUs")}
                    </button>
                </div>
            )}
        </div>
    );
};
