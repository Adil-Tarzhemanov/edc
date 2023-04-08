import styles from './Point.module.scss'

export const Point = ({ title, text }) => {
    return (
        <div className={styles.point}>
              <div className={styles.titleWrapper}>
                <h2 className={styles.title}>{title}</h2>
              </div>
              <div className={styles.line}></div>
              <p className={styles.text}>{text}</p>              
        </div>
    )
}