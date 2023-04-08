import styles from './Review.module.scss';

export const Review = ({ name, title, review, img }) => {
    return (
        <div className={styles.review}>
            <div className={styles.clientWrapper}>
                <img src={img} 
                     className={styles.clientPhoto}
                     alt='client' />
                <div className={styles.clientName}>
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                </div>
            </div>
            <p className={styles.text}>{review}</p>
            <div className={styles.starWrapper}>
                <img src="img/Star.png" alt='star' />
                <img src="img/Star.png" alt='star' />
                <img src="img/Star.png" alt='star' />
                <img src="img/Star.png" alt='star' />
                <img src="img/Star.png" alt='star' />
            </div>
        </div>
    );
};
