import { Section } from '../Section/Section';
import styles from './Trust.module.scss';

export const Trust = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Section valueText="КЛИЕНТЫ" />
                <h2>Нам доверяют</h2>
            </div>
            <div className={styles.trustWrapper}>
                <div className={styles.companies}>
                    <img src="img/Companies1.png" alt="company" />
                    <img src="img/Companies2.png" alt="company" />
                </div>
            </div>
        </div>
    );
};
