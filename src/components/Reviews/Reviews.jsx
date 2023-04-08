import { CarouselReviews } from '../CarouselReviews/CarouselReviews';
import { Review } from '../Review/Review';
import { Section } from '../Section/Section';
import { useState } from 'react';
import styles from './Reviews.module.scss';
import { reviews } from './data/reviews/reviews';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';

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

    return (
        size.width > 1210 && (
            <div className={styles.container}>
                <div className={styles.circleWrapper}>
                    <img src="img/circle.png" className={styles.circle} alt='circle' />
                </div>
                <div className={styles.wrapper}>
                    <Section valueText="отзывы" />
                    <h2>Что говорят наши клиенты</h2>
                    <p>
                        Нам крайне приятно получать обратную связь от наших
                        клиентов, вот что <br /> они говорят о нас.
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
                                    <Review {...reviews[0]} />
                                    <Review {...reviews[1]} />
                                </div>
                                <div className={styles.element}>
                                    <Review {...reviews[2]} />
                                    <Review {...reviews[3]} />
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
