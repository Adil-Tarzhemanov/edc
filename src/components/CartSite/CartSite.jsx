import styles from './CartSite.module.scss';

export const CartSite = ({ cart }) => {
    return (
        <div className={styles.service}>
            <h3 className={styles.head}>
                {cart.head1}<br />{cart.head2}
            </h3>
            <p className={styles.text}>
                {cart.text}
            </p>
            <img src='/img/designService/1.png' alt='service' />
        </div>
    )
}