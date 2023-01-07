import styles from './Quality.module.scss';

import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export const Quality = () => {
    const { ref: rangeRef, inView: rangeVisible } = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    const { ref: qualityRef, inView: qualityVisible } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [flip, set] = useState(false);
    const { age, guarantee, specialists, projects } = useSpring({
        reset: false,
        reverse: flip,
        from: { age: 0, guarantee: 0, specialists: 0, projects: 0 },
        age: 2,
        guarantee: 100,
        specialists: 10,
        projects: 20,
        delay: 0,
        config: config.molasses,
        onRest: () => set(flip),
    });

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.ranges} ref={rangeRef}>
                    {rangeVisible && (
                        <div
                            className={`${
                                rangeVisible && styles.rangeWrapper
                            } ${rangeVisible && styles.rangeAnimetion}`}
                        >
                            <div className={styles.range}>
                                <p>более</p>
                                <animated.h2>
                                    {age.to((n) => n.toFixed(0))}
                                </animated.h2>
                            </div>
                            <p>
                                лет <br /> в бизнесе
                            </p>
                        </div>
                    )}
                    {rangeVisible && (
                        <div
                            className={`${
                                rangeVisible && styles.rangeWrapper
                            } ${rangeVisible && styles.rangeAnimetion}`}
                        >
                            <div
                                className={`${styles.range} ${styles.rangePercent}`}
                            >
                                <animated.h2>
                                    {guarantee.to((n) => n.toFixed(0))}
                                </animated.h2>
                                <h2 className={styles.percent}>%</h2>
                            </div>
                            <p>
                                гарантия <br /> на услуги
                            </p>
                        </div>
                    )}
                    {rangeVisible && (
                        <div
                            className={`${
                                rangeVisible && styles.rangeWrapper
                            } ${rangeVisible && styles.rangeAnimetion}`}
                        >
                            <div className={styles.range}>
                                <p>более</p>
                                <animated.h2>
                                    {specialists.to((n) => n.toFixed(0))}
                                </animated.h2>
                            </div>
                            <p>
                                компетентных <br /> специалистов
                            </p>
                        </div>
                    )}
                    {rangeVisible && (
                        <div
                            className={`${
                                rangeVisible && styles.rangeWrapper
                            } ${rangeVisible && styles.rangeAnimetion}`}
                        >
                            <div className={styles.range}>
                                <p>более</p>
                                {rangeVisible && (
                                    <animated.h2>
                                        {projects.to((n) => n.toFixed(0))}
                                    </animated.h2>
                                )}
                            </div>
                            <p>
                                успешных <br /> проектов
                            </p>
                        </div>
                    )}
                </div>
                <div className={styles.qualities} ref={qualityRef}>
                    {qualityVisible && (
                        <div className={qualityVisible && styles.quality}>
                            <img src="img/money.png" alt="quality" />
                            <div className={styles.title}>
                                <h3>
                                    Доступные <br /> цены
                                </h3>
                            </div>
                            <p>
                                Отличные цены на услуги доступные даже
                                начинающим предпринимателям.
                            </p>
                        </div>
                    )}
                    {qualityVisible && (
                        <div
                            className={`${qualityVisible && styles.quality} ${
                                qualityVisible && styles.middle
                            }`}
                        >
                            <img src="img/seo.png" alt="quality" />
                            <div className={styles.title}>
                                <h3>SEO - оптимизация</h3>
                            </div>
                            <p>
                                Правильная оптимизация сайта для увеличения
                                положительной индексации поисковыми системами.
                            </p>
                        </div>
                    )}
                    {qualityVisible && (
                        <div className={qualityVisible && styles.quality}>
                            <img src="img/support.png" alt="quality" />
                            <div className={styles.title}>
                                <h3>
                                    Поддержка <br /> 24/7
                                </h3>
                            </div>
                            <p>
                                Техническая поддержка и&nbsp;доработки сайтов
                                любой сложности, аудит и&nbsp;аналитика.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
