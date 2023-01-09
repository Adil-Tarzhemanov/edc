import { Section } from '../Section/Section';
import styles from './AboutUs.module.scss';
import { useInView } from 'react-intersection-observer';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';

export const AboutUs = ({ setActiveModal }) => {
    const { ref: h2Ref, inView: h2Visible, } = useInView({
        triggerOnce: true,
    });
    const { ref: pRef, inView: pVisible, } = useInView({
        triggerOnce: true,
    });
    const { ref: imgRef, inView: imgVisible, } = useInView({
        triggerOnce: true,
    });
    const { ref: buttonRef, inView: buttonVisible, } = useInView({
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
                    <div ref={h2Ref}>
                        {h2Visible && <h2 className={`${styles.h2} ${h2Visible && styles.appearanceLeft}`}>
                            Компания мечты
                        </h2>}
                    </div>
                    <div ref={pRef}>
                        {pVisible && <p className={`${styles.p} ${pVisible && styles.appearanceLeft}`}>
                            Компания “Eden Company” - это больше, чем группа людей,
                            мы семья объединенная общей целью, где каждый член
                            вносит огромный вклад в общее дело. Наша цель -
                            продвижение современных технологий в массы, чтобы
                            автоматизировать, облегчить и усовершенствовать жизнь
                            людей.
                        </p>}
                    </div>
                    <div ref={buttonRef}>
                        {buttonVisible && <div className={`${styles.btnWrap} ${buttonVisible && styles.appearanceLeft}`}>
                            <button
                                className={`${styles.button}`} 
                                onClick={() => setActiveModal(true)}
                            >
                                Связаться с нами
                            </button>
                        </div>}
                    </div>
                    <div ref={imgRef}>
                        {imgVisible && <img
                            src="img/OurTeam.png"
                            alt="team"
                            className={`${styles.ourTeam} ${imgVisible && styles.appearanceRight}`}
                        />}
                    </div>
                </div>
            ) : (
                <div className={styles.flexWrapper}>
                    <Section
                        className={styles.section2}
                        valueText="О нас"
                        meteor
                    />
                    <div ref={h2Ref}>
                        {h2Visible && <h2 className={`${styles.h22} ${styles.appearanceLeft}`} ref={h2Ref}>
                            Компания мечты
                        </h2>}
                    </div>
                    <div ref={pRef}>
                        {pVisible && <p className={`${styles.p2} ${styles.appearanceRight}`} ref={pRef}>
                            Компания “Eden Company” - это больше, чем группа людей,
                            мы семья объединенная общей целью, где каждый член
                            вносит огромный вклад в общее дело. Наша цель -
                            продвижение современных технологий в массы, чтобы
                            автоматизировать, облегчить и усовершенствовать жизнь
                            людей.
                        </p>}
                    </div>
                    <div ref={imgRef}>
                    {imgVisible && <img
                            src="img/OurTeam.png"
                            alt="team"
                            className={`${styles.ourTeam2} ${styles.appearanceLeft}`}
                            ref={imgRef}
                        />}
                    </div>
                    {/* <div ref={buttonRef}> */}
                        <button
                            className={`${styles.button2}`}
                            onClick={() => setActiveModal(true)}
                        >
                            Связаться с нами
                        </button>
                    {/* </div> */}
                </div>
            )}
        </div>
    );
};
