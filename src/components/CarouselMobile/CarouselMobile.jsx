import { useEffect } from 'react';
import { cloneElement } from 'react';
import { useState, Children } from 'react';
import styles from './CarouselMobile.module.scss';

export const CarouselMobile = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

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
    }, []);

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 238;
            const maxOffset = -(238 * (pages.length - 1));

            return Math.max(newOffset, maxOffset);
        });
    };

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 238;
            return Math.min(newOffset, 0);
        });
    };

    return (
        <div className={styles.container}>
            <img
                onClick={handleLeftClick}
                className={styles.leftArrow}
                src="img/leftArrow.png"
            />
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
            <img
                onClick={handleRightClick}
                className={styles.rightArrow}
                src="img/rightArrow.png"
            />
        </div>
    );
};
