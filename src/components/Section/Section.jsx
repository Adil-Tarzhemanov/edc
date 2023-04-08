import styles from './Section.module.scss';

export const Section = ({ valueText, meteor, paddingLeft }) => {
    return (
        <div>
            <div
                className={styles.section}
                style={paddingLeft && { paddingLeft: 160 }}
            >
                {meteor && <img src="img/meteor.png" alt='meteor' />}
                <div className={styles.lineSection}></div>
                <h3>{valueText}</h3>
            </div>
        </div>
    );
};
