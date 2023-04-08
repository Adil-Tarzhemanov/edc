import styles from './Main.module.scss';

export const Main = ({ head, text, robot }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.headAndText}>
                        <h1>
                            {head}
                        </h1>
                        <p>
                            {text}
                        </p>
                    </div>
                    <img src={robot} alt='robot' />
                </div>
            </div>
        </div>
        
    )
}