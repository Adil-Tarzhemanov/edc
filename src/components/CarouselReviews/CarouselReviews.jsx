import { useEffect } from 'react';
import { cloneElement } from 'react';
import { Children } from 'react';
import styles from './styles.module.scss';

export const CarouselReviews = ({ children, setPages, pages, offset }) => {
    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100',
                        minWidth: '100',
                        maxWidth: '100',
                    },
                });
            })
        );
    });

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.window}>
                    <div
                        className={styles.allProjects}
                        style={{ transform: `translateX(${offset}px)` }}
                    >
                        {pages}
                    </div>
                </div>
            </div>
        </div>
    );
};
