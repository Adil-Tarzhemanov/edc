// import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import { useTranslation } from 'react-i18next';
import { Section } from '../Section/Section';
import styles from './Services.module.scss';

export const Services = () => {
    // const size = UseWindowSize();
    const { t } = useTranslation();

    return (
        <div className={styles.container} id="services">
            <div className={styles.wrapper}>
                <div className={styles.topPart}>
                    <div className={styles.leftTopPart}>
                        <div className={styles.headAndSection}>
                            <Section valueText={t("services")} />
                            <h2 className={styles.h2}>
                                {t("advancing")} <br /> {t("tech")} 
                            </h2>
                        </div>
                        <div>
                            <p className={styles.headText}>
                                {t("ServHeadText")}
                                {/* &laquo;<span>Eden Company</span>&raquo; готова реализовать для вас
                                профессиональный проект любой сложности в&nbsp;сфере
                                IT-технологий. Трепетное отношение к&nbsp;каждому отдельному
                                проекту, с&nbsp;использованием передовых технологии
                                в&nbsp;области программирования и&nbsp;дизайна, позволяет
                                нам создавать продукты высокого качества. */}
                            </p>
                        </div>
                    </div>
                    {/* {size.width > 1200 && <iframe 
                        className={styles.robotRiveUp} 
                        src="https://rive.app/s/hEiRduSrFkqxYpkyBqAhPw/embed"
                        title='robot' allowfullscreen>
                    </iframe>} */}
                </div>
                <div className={styles.services}>
                    <div className={styles.serviceWrapper}>
                        <img src="img/monitor.png" alt='service' />
                        <div className={styles.service}>
                            <h3>
                                {t("ServHead11")} <br /> 
                                {t("ServHead12")}
                            </h3>
                            <p>
                               {t("ServText1")}
                            </p>
                        </div>
                    </div>
                    <div className={styles.serviceWrapper}>
                        <img src="img/mobile.png" alt='service' />
                        <div
                            className={styles.service}
                        >
                            <h3>{t("ServHead2")}</h3>
                            <p>
                                {t("ServText2")}
                            </p>
                        </div>
                    </div>
                    <div className={styles.serviceWrapper}>
                        <img src="img/ui.png" alt='service' />
                        <div
                            className={styles.service}
                        >
                            <h3 className={styles.design}>{t("ServHead3")}</h3>
                            <p>
                                {t("ServText3")}
                            </p>
                        </div>
                    </div>
                    <div className={styles.serviceWrapper}>
                        <img src="img/bot.png" alt='service' />
                        <div
                            className={styles.service}
                        >
                            <h3>{t("ServHead4")}</h3>
                            <p>
                                {t("ServText4")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
