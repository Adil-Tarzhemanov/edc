import styles from './Number.module.scss';

export const Number = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.titleAndNumber}>
                        <div className={styles.titles}>
                            <h2 className={styles.title1}>
                                Нет времени читать?
                            </h2>
                            <h3 className={styles.title2}>
                                Оставьте телефон для связи. 
                            </h3>
                        </div>
                        <div className={styles.number}>
                            <div className={styles.telephoneAndCall}>
                                <button className={styles.telephone}>
                                    Телефон
                                </button>
                                <button className={styles.call}>
                                    Жду звонка!
                                </button>
                            </div>
                            <p className={styles.text}>
                                Нажимая на кнопку "Жду звонка", вы соглашаетесь на обработку персональных данных
                            </p>
                        </div>
                    </div>
                    <div className={styles.whatWeDo}>
                        <div className={styles.checkAndWeDo}>
                            <img className={styles.check} src='img/utils/check.png' alt='check'/>
                            <p className={styles.weDo}>Мы позвоним вам, чтобы обсудить проект.</p>
                        </div>
                        <div className={styles.checkAndWeDo}>
                            <img className={styles.check} src='img/utils/check.png' alt='check'/>
                            <p className={`${styles.weDo} ${styles.second}`}>Определим, какой стиль дизайна вы бы хотели реализовать.</p>
                        </div>
                        <div className={styles.checkAndWeDo}>
                            <img className={styles.check} src='img/utils/check.png' alt='check'/>
                            <p className={`${styles.weDo} ${styles.third}`}>Посчитаем примерные сроки.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}