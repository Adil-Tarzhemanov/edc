import { Link } from 'react-scroll';
import { UseWindowSize } from '../hooks/UseWindowSize/UseWindowSize';
import styles from './Menu.module.scss';

export const Menu = ({
    items,
    menuActive,
    setMenuActive,
    activeModal,
    setActiveModal,
}) => {
    const size = UseWindowSize();

    const onProject = () => {
        setMenuActive(false);
        setActiveModal(true);
    };

    return (
        <div
            className={`${styles.menu} ${menuActive && styles.active}`}
            onClick={() => size.width > 750 && setMenuActive(false)}
        >
            <div className={styles.blur} />
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                <ul>
                    {items.map((item) => (
                        <Link
                            to={item.to}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            <li onClick={() => setMenuActive(false)}>
                                {item.value}
                            </li>
                        </Link>
                    ))}
                </ul>
                <button onClick={onProject}>Заказать проект</button>
                {size.width < 500 && <img src='img/backMobileCircle.png' />}
            </div>
        </div>
    );
};
