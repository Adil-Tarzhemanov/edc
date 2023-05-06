import { CarouselReviews } from '../CarouselReviews/CarouselReviews';
// import { Review } from '../Review/Review';
import { Section } from '../Section/Section';
import { useState } from 'react';
import styles from './Reviews.module.scss';
// import { reviews } from './data/reviews/reviews';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import { useTranslation } from 'react-i18next';

export const Reviews = () => {

    const size = UseWindowSize();

    const [offset, setOffset] = useState(0);
    const [pages, setPages] = useState([]);

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 1167;
            const maxOffset = -(1167 * (pages.length - 1));

            return Math.max(newOffset, maxOffset);
        });
    };

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 1167;
            return Math.min(newOffset, 0);
        });
    };

    const { t } = useTranslation();

    return (
        size.width > 1210 && (
            <div className={styles.container}>
                <div className={styles.circleWrapper}>
                    <img src="img/circle.png" className={styles.circle} alt='circle' />
                </div>
                <div className={styles.wrapper}>
                    <Section valueText={t("reviews")} />
                    <h2>{t("reviewsHeadText")}</h2>
                    <p>
                        {t("reviewsText1")} <br /> {t("reviewsText2")}
                    </p>
                    <img
                        src="img/reviewLeftArrow.png"
                        className={styles.leftArrow}
                        onClick={handleLeftClick}
                        alt='arrow'
                    />
                    <div className={styles.reviews}>
                        <div className={styles.reviewsContainer}>
                            <CarouselReviews
                                offset={offset}
                                pages={pages}
                                setPages={setPages}
                            >
                                <div className={styles.element}>
                                    <div className={styles.review}>
                                        <div className={styles.clientWrapper}>
                                            <img src={'img/rewiews/ekaterina.png'} 
                                                className={styles.clientPhoto}
                                                alt='client' />
                                            <div className={styles.clientName}>
                                                <h3>{t("reviewHead1")}</h3>
                                                <h4>{t("reviewHeadText1")}</h4>
                                            </div>
                                        </div>
                                        <p className={styles.text}>
                                            {t("reviewText1")}
                                        </p>
                                        <div className={styles.starWrapper}>
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                        </div>
                                    </div>
                                    <div className={styles.review}>
                                        <div className={styles.clientWrapper}>
                                            <img src={'img/rewiews/baha.png'} 
                                                className={styles.clientPhoto}
                                                alt='client' />
                                            <div className={styles.clientName}>
                                                <h3>{t("reviewHead2")}</h3>
                                                <h4>{t("reviewHeadText2")}</h4>
                                            </div>
                                        </div>
                                        <p className={styles.text}>
                                            {t("reviewText2")}
                                        </p>
                                        <div className={styles.starWrapper}>
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                        </div>
                                    </div>
                                    {/* <Review {...reviews[0]} />
                                    <Review {...reviews[1]} /> */}
                                </div>
                                <div className={styles.element}>
                                    <div className={styles.review}>
                                        <div className={styles.clientWrapper}>
                                            <img src={'img/rewiews/abdulla.png'} 
                                                className={styles.clientPhoto}
                                                alt='client' />
                                            <div className={styles.clientName}>
                                                <h3>{t("reviewHead3")}</h3>
                                                <h4>{t("reviewHeadText3")}</h4>
                                            </div>
                                        </div>
                                        <p className={styles.text}>
                                            {t("reviewText3")}
                                        </p>
                                        <div className={styles.starWrapper}>
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                        </div>
                                    </div>
                                    <div className={styles.review}>
                                        <div className={styles.clientWrapper}>
                                            <img src={'img/rewiews/sergey.png'} 
                                                className={styles.clientPhoto}
                                                alt='client' />
                                            <div className={styles.clientName}>
                                                <h3>{t("reviewHead4")}</h3>
                                                <h4>{t("reviewHeadText4")}</h4>
                                            </div>
                                        </div>
                                        <p className={styles.text}>
                                            {t("reviewText4")}
                                        </p>
                                        <div className={styles.starWrapper}>
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                            <img src="img/Star.png" alt='star' />
                                        </div>
                                    </div>
                                    {/* <Review {...reviews[2]} />
                                    <Review {...reviews[3]} /> */}
                                </div>
                            </CarouselReviews>
                        </div>
                    </div>
                    <img
                        src="img/reviewRightArrow.png"
                        className={styles.rightArrow}
                        onClick={handleRightClick}
                        alt='arrow'
                    />
                    {/* <div className={styles.dotWrapper}>
                        <img src="img/dot.png"/>
                        <img src="img/dot.png" />
                        <img src="img/dot.png" />
                    </div> */}
                </div>
            </div>
        )
    );
};
