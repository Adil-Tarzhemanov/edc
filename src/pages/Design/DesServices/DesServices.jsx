import { Cart } from '../../../components/Cart/Cart';
import { Section } from '../../../components/Section/Section';
import { CartDesign } from '../../../data/CartService';
import styles from './Services.module.scss';

export const DesServices = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
               <Section valueText="Что входит?" meteor />
               <h2 className={styles.title}>Услуги веб- <br /> дизайна</h2>
               <div className={styles.designServices}>
                    {CartDesign.map(cart => <Cart cart={cart} />)}
               </div>
            </div>
        </div>
        
    )
}