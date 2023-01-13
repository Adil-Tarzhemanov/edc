import { useInView } from 'react-intersection-observer';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import { Section } from '../Section/Section';
import styles from './Services.module.scss';

export const Services = () => {
    const size = UseWindowSize();

    const {
        ref: h2Ref,
        inView: h2Visible,
    } = useInView({ triggerOnce: true, threshold: 1 });
    const {
        ref: pRef,
        inView: pVisible,
    } = useInView({ triggerOnce: true, threshold: 0.1 });
    const {
        ref: firstRef,
        inView: firstVisible,
    } = useInView({ triggerOnce: true, threshold: 0.1 });
    const {
        ref: secondRef,
        inView: secondVisible,
    } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className={styles.container} id="services">
            <div className={styles.wrapper}>
                <div className={styles.topPart}>
                    <div className={styles.leftTopPart}>
                        <div className={styles.headAndSection}>
                            <Section valueText="услуги" />
                            <h2
                                className={`${h2Visible && styles.h2} ${
                                    h2Visible && styles.appearanceLeft
                                }`}
                                ref={h2Ref}
                            >
                                Продвигая <br /> технологии
                            </h2>
                        </div>
                        <p
                            ref={pRef}
                            className={`${pVisible && styles.headText} ${
                                pVisible && styles.appearanceLeft
                            }`}
                        >
                            &laquo;Eden Company&raquo; готова реализовать для вас
                            профессиональный проект любой сложности в&nbsp;сфере
                            IT-технологий. Трепетное отношение к&nbsp;каждому отдельному
                            проекту, с&nbsp;использованием передовых технологии
                            в&nbsp;области программирования и&nbsp;дизайна, позволяет
                            нам создавать продукты высокого качества.
                        </p>
                    </div>
                    {size.width > 1200 && <iframe 
                        className={styles.robotRiveUp} 
                        src="https://rive.app/s/hEiRduSrFkqxYpkyBqAhPw/embed"
                        title='robot' allowfullscreen>
                    </iframe>}
                </div>

                <div className={styles.services}>
                    <div className={`${styles.serviceWrapper} ${
                                firstVisible && styles.first
                            }`}
                         ref={firstRef}>
                            
                        <img src="img/monitor.png" />
                        <div
                            className={styles.service}
                        >
                            <h3>
                                Разработка <br /> 
                                Веб - сайта
                            </h3>
                            <p>
                                Привлеките клиентов и выведите свой бизнес на
                                новый уровень создав собственный сайт. Наша
                                команда специалистов поможет Вам в этом и
                                разработает для Вас современный сайт с
                                эксклюзивным дизайном.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.serviceWrapper} ${
                                secondVisible && styles.second
                            }`}
                         ref={secondRef}>
                        <img src="img/mobile.png" />
                        <div
                            className={styles.service}
                            
                        >
                            <h3>Разработка Приложения</h3>
                            <p>
                                Создание мобильного приложения будет отличным
                                решением для интернет-магазинов, банков, служб
                                доставки и игровых студий. Вы можете доверить
                                нам процесс разработки и не бескоиться.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.serviceWrapper} ${
                                firstVisible && styles.first
                            }`}
                         ref={firstRef}>
                        <img src="img/ui.png" />
                        <div
                            className={styles.service}
                        >
                            <h3 className={styles.design}>UI/UX Дизайн</h3>
                            <p>
                                Наши веб-дизайнеры займутся разработкой
                                уникального стиля интерфейсов, а также воплотят
                                ваши идеи по созданию логотипа, баннеров и др.
                                визуального контента.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.serviceWrapper} ${
                                secondVisible && styles.second
                            }`}
                         ref={secondRef}>
                        <img src="img/bot.png" />
                        <div
                            className={styles.service}
                        >
                            <h3>Разработка Теглаграмм Бота</h3>
                            <p>
                                Телеграмм - является одним из самых популярных
                                мессенджеров. Создание бота для данного
                                приложения открывает огромное пространство
                                возможностей для Вашего бизнеса или блога.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
