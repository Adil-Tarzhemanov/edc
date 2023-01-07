import { Section } from '../Section/Section';
import styles from './AboutUs.module.scss';
import { useInView } from 'react-intersection-observer';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';

export const AboutUs = ({ setActiveModal }) => {
    const { ref: h2Ref } = useInView({
        triggerOnce: true,
    });
    const { ref: pRef } = useInView({
        triggerOnce: true,
    });
    const { ref: imgRef } = useInView({
        triggerOnce: true,
    });
    const { ref: buttonRef } = useInView({
        triggerOnce: true,
    });

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
                    <h2 className={`${styles.h2}`} ref={h2Ref}>
                        Компания мечты
                    </h2>
                    <p className={`${styles.p}`} ref={pRef}>
                        Компания “Eden Company” - это больше, чем группа людей,
                        мы семья объединенная общей целью, где каждый член
                        вносит огромный вклад в общее дело. Наша цель -
                        продвижение современных технологий в массы, чтобы
                        автоматизировать, облегчить и усовершенствовать жизнь
                        людей.
                    </p>
                    <button
                        className={`${styles.button}`}
                        ref={buttonRef}
                        onClick={() => setActiveModal(true)}
                    >
                        Связаться с нами
                    </button>
                    <img
                        src="img/OurTeam.png"
                        alt="team"
                        className={`${styles.ourTeam}`}
                        ref={imgRef}
                    />
                </div>
            ) : (
                <div className={styles.flexWrapper}>
                    <Section
                        className={styles.section2}
                        valueText="О нас"
                        meteor
                    />
                    <h2 className={`${styles.h22}`} ref={h2Ref}>
                        Компания мечты
                    </h2>
                    <p className={`${styles.p2}`} ref={pRef}>
                        Компания “Eden Company” - это больше, чем группа людей,
                        мы семья объединенная общей целью, где каждый член
                        вносит огромный вклад в общее дело. Наша цель -
                        продвижение современных технологий в массы, чтобы
                        автоматизировать, облегчить и усовершенствовать жизнь
                        людей.
                    </p>
                    <img
                        src="img/OurTeam.png"
                        alt="team"
                        className={`${styles.ourTeam2}`}
                        ref={imgRef}
                    />
                    <button
                        className={`${styles.button2}`}
                        ref={buttonRef}
                        onClick={() => setActiveModal(true)}
                    >
                        Связаться с нами
                    </button>
                </div>
            )}
        </div>
    );
};
