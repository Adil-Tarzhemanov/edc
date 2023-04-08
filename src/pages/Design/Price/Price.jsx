import { Point } from '../../../components/Point/Point';
import { Section } from '../../../components/Section/Section';
import { pointsDesign } from '../../../data/pointsDesign';
import styles from './Price.module.scss';

export const Price = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Section valueText='Как считать?' meteor />
                <h1 className={styles.head}>
                    Формирование стоимости
                </h1>
                <div className={styles.points}>
                    {pointsDesign.map(point => 
                        <Point title={point.title} text={point.text} />)}
                </div>
            </div>
        </div>
    )
}