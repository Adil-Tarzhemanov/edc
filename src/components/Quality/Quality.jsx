import styles from './Quality.module.scss';

export const Quality = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.ranges}>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}>
                            <p>более</p>
                            <h2>2</h2>
                        </div>
                        <p>
                            лет <br /> в бизнесе
                        </p>
                    </div>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}>
                            <h2 className={styles.percent}>100%</h2>
                        </div>
                        <p>
                            гарантия <br /> на услуги
                        </p>
                    </div>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}> 
                            <p>более</p>
                            <h2>10</h2>
                        </div>
                        <p>
                            компетентных <br /> специалистов
                        </p>
                    </div>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}>
                            <p>более</p>
                            <h2>20</h2>
                        </div>
                        <p>
                            успешных <br /> проектов
                        </p>
                    </div>
                </div>
                <div className={styles.qualities}>
                    <div className={styles.quality}>
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
                    <div className={styles.quality}>
                        <img src="img/seo.png" alt="quality" />
                        <div className={styles.title}>
                            <h3>SEO - оптимизация</h3>
                        </div>
                        <p>
                            Правильная оптимизация сайта для увеличения
                            положительной индексации поисковыми системами.
                        </p>
                    </div>
                    <div className={styles.quality}>
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
                </div>
            </div>
        </div>
    );
};
