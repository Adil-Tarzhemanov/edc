import { Section } from '../Section/Section';
import styles from './AboutUs.module.scss';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';

export const AboutUs = ({ setActiveModal }) => {

    const size = UseWindowSize();

    return (
        <div className={styles.container} id="aboutUs">
            {size.width > 1280 ? (
                <div className={styles.wrapper}>
                    <Section
                        className={styles.section}
                        valueText="О нас"
                        meteor
                    />
                    <div>
                        <h2 className={styles.h2}>
                            Компания мечты
                        </h2>
                    </div>
                    <div>
                        <p className={styles.p}>
                            Компания “Eden Company” - это больше, чем группа людей,
                            мы семья объединенная общей целью, где каждый член
                            вносит огромный вклад в общее дело. Наша цель -
                            продвижение современных технологий в массы, чтобы
                            автоматизировать, облегчить и усовершенствовать жизнь
                            людей.
                        </p>
                    </div>
                    <div>
                        <div className={styles.btnWrap}>
                            <button
                                className={`${styles.button}`} 
                                onClick={() => setActiveModal(true)}
                            >
                                Связаться с нами
                            </button>
                        </div>
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
                        valueText="О нас"
                        meteor
                    />
                    <div>
                        <h2 className={styles.h22}>
                            Компания мечты
                        </h2>
                    </div>
                    <div>
                        <p className={styles.p2}>
                            Компания “Eden Company” - это больше, чем группа людей,
                            мы семья объединенная общей целью, где каждый член
                            вносит огромный вклад в общее дело. Наша цель -
                            продвижение современных технологий в массы, чтобы
                            автоматизировать, облегчить и усовершенствовать жизнь
                            людей.
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
                        Связаться с нами
                    </button>
                </div>
            )}
        </div>
    );
};
