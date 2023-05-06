import { useTranslation } from 'react-i18next';
import styles from './Quality.module.scss';

export const Quality = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.ranges}>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}>
                            <p>{t("more")}</p>
                            <h2>2</h2>
                        </div>
                        <p>
                            {t("qualityCircleText11")} <br /> {t("qualityCircleText12")}
                        </p>
                    </div>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}>
                            <h2 className={styles.percent}>100%</h2>
                        </div>
                        <p>
                            {t("qualityCircleText21")} <br /> {t("qualityCircleText22")}
                        </p>
                    </div>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}> 
                            <p>{t("more")}</p>
                            <h2>10</h2>
                        </div>
                        <p>
                            {t( "qualityCircleText31")} <br /> {t( "qualityCircleText32")}
                        </p>
                    </div>
                    <div
                        className={styles.rangeWrapper}>
                        <div className={styles.range}>
                            <p>{t("more")}</p>
                            <h2>20</h2>
                        </div>
                        <p>
                        {t( "qualityCircleText41")} <br /> {t( "qualityCircleText42")}
                        </p>
                    </div>
                </div>
                <div className={styles.qualities}>
                    <div className={styles.quality}>
                        <img src="img/money.png" alt="quality" />
                        <div className={styles.title}>
                            <h3>
                                {t("qualityHeadText1")}
                            </h3>
                        </div>
                        <p>
                            {t("qualityText1")}
                        </p>
                    </div>
                    <div className={styles.quality}>
                        <img src="img/seo.png" alt="quality" />
                        <div className={styles.title}>
                            <h3>{t("qualityHeadText2")}</h3>
                        </div>
                        <p>
                            {t("qualityText2")}
                        </p>
                    </div>
                    <div className={styles.quality}>
                        <img src="img/support.png" alt="quality" />
                        <div className={styles.title}>
                            <h3>
                                {/* Поддержка <br /> 24/7 */}
                                {t("qualityHeadText3")}
                            </h3>
                        </div>
                        <p>
                            {t("qualityText3")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
