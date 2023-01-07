import styles from './styles.module.scss';
// import CancelIcon from '@mui/icons-material/Cancel';

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const ModalWindow = ({ activeModal, setActiveModal }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.closeModal}>
                    <img src='img/closeModal.png' alt='close' />
                </div>
                <h2>Написать нам</h2>
                <div className={styles.basicWrapper}> 
                    <input placeholder="имя" />
                    <input placeholder="почта" />
                    <textarea placeholder="сообщение" />
                    <button className={styles.send}>Отправить</button>
                    <div className={styles.imgWrapper}>
                        <TelegramIcon
                            // style={{
                            //     width: 30,
                            //     height: 30,
                            //     color: 'white',
                            //     cursor: 'pointer',
                            // }}
                            className={styles.socialMedia}
                        />
                        <WhatsAppIcon
                            // style={{
                            //     width: 30,
                            //     height: 30,
                            //     color: 'white',
                            //     cursor: 'pointer',
                            // }}
                            className={styles.socialMedia}
                        />
                        <FacebookIcon
                            // style={{
                            //     width: 30,
                            //     height: 30,
                            //     color: 'white',
                            //     cursor: 'pointer',
                            // }}
                            className={styles.socialMedia}
                        />
                        <MailOutlineIcon
                            // style={{
                            //     width: 30,
                            //     height: 30,
                            //     color: 'white',
                            //     cursor: 'pointer',
                            // }}
                            className={styles.socialMedia}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
