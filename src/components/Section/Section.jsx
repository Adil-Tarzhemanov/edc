import styles from './Section.module.scss';
import { useInView } from 'react-intersection-observer';

export const Section = ({ valueText, meteor, paddingLeft }) => {
    const { ref: ref, inView: sectionVisible } = useInView({
        triggerOnce: true,
    });
    return (
        <div
            className={`${styles.section} ${
                sectionVisible && styles.sectionAppearance
            }`}
            ref={ref}
            style={paddingLeft && { paddingLeft: 160 }}
        >
            {meteor && <img src="img/meteor.png" />}
            <div className={styles.lineSection}></div>
            <h3>{valueText}</h3>
        </div>
    );
};
