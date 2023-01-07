import { Review } from '../Review/Review';
import styles from './TwoReviews.module.scss';

export const TwoReviews = () => {
    return (
        <div className={styles.element}>
            <Review />
            <Review />
        </div>
    );
};
