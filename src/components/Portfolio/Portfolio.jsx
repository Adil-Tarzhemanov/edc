import { useRef } from 'react';
import { Carousel } from '../Carousel/Carousel';
import { CarouselMobile } from '../CarouselMobile/CarouselMobile';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import { Section } from '../Section/Section';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
    const size = UseWindowSize();

    return (
        <div className={styles.container} id="portfolio">
            <div className={styles.wrapper}>
                <div className={styles.headAndInstructionWrap}>
                    <div className={styles.head}>
                        <Section valueText="Портфолио" meteor />
                        <h2>
                            Наши последние <br /> проекты
                        </h2>
                    </div>
                    {size.width > 610 && (
                        <div className={styles.instruction}>
                            <img src="img/brush.png" />
                            <p>
                                проскрольте <br /> экраны <br /> устройств
                            </p>
                        </div>
                    )}
                </div>
                {size.width > 1270 ? (
                    <div className={styles.projectsWrapper}>
                        <div className={styles.imgAndProject}>
                            <img
                                src="img/MonitorForProd.png"
                                className={styles.monitorImg}
                            />
                            <div className={styles.projectContainer}>
                                <Carousel>
                                    <div className={styles.projectWrap}>
                                        <img
                                            src="img/GameMarket.png"
                                            className={styles.project}
                                        />
                                    </div>
                                    <div className={styles.projectWrap}>
                                        <img
                                            src="img/Montaj.png"
                                            className={styles.project}
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <div className={styles.imgAndMobile}>
                            <img
                                src="img/mobileProd.png"
                                className={styles.mobile}
                            />
                            <div className={styles.mobileProjectContainer}>
                                <CarouselMobile>
                                    <div className={styles.mobileProjectWrap}>
                                        <img
                                            src="img/school.png"
                                            className={styles.mobileProject}
                                        />
                                    </div>
                                    <div className={styles.mobileProjectWrap}>
                                        <img
                                            src="img/jeans3.png"
                                            className={styles.mobileProject}
                                        />
                                    </div>
                                </CarouselMobile>
                            </div>
                        </div>
                    </div>
                ) : size.width > 685 && size.width < 1270 ? (
                    <div className={styles.projectsWrapper2}>
                        <div className={styles.imgAndProject2}>
                            <img
                                src="img/MonitorForProd.png"
                                className={styles.monitorImg2}
                            />
                            <div className={styles.projectContainer2}>
                                <Carousel>
                                    <div className={styles.projectWrap2}>
                                        <img
                                            src="img/GameMarket.png"
                                            className={styles.project2}
                                        />
                                    </div>
                                    <div className={styles.projectWrap2}>
                                        <img
                                            src="img/Montaj.png"
                                            className={styles.project2}
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <div className={styles.imgAndMobile2}>
                            <img
                                src="img/mobileProd.png"
                                className={styles.mobile2}
                            />
                            <div className={styles.mobileProjectContainer2}>
                                <CarouselMobile>
                                    <div className={styles.mobileProjectWrap2}>
                                        <img
                                            src="img/school.png"
                                            className={styles.mobileProject2}
                                        />
                                    </div>
                                    <div className={styles.mobileProjectWrap2}>
                                        <img
                                            src="img/jeans3.png"
                                            className={styles.mobileProject2}
                                        />
                                    </div>
                                </CarouselMobile>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.projectsWrapper3}>
                        <div className={styles.imgAndMobile3}>
                            <img
                                src="img/mobileProd.png"
                                className={styles.mobile3}
                            />
                            <div className={styles.mobileProjectContainer3}>
                                <CarouselMobile>
                                    <div className={styles.mobileProjectWrap3}>
                                        <img
                                            src="img/school.png"
                                            className={styles.mobileProject3}
                                        />
                                    </div>
                                    <div className={styles.mobileProjectWrap3}>
                                        <img
                                            src="img/jeans3.png"
                                            className={styles.mobileProject3}
                                        />
                                    </div>
                                </CarouselMobile>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
