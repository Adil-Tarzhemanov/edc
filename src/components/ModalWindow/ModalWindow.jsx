import styles from './styles.module.scss';

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const ModalWindow = ({ activeModal, setActiveModal }) => {
    return (
        <div className={styles.modal} onClick={() => setActiveModal(false)}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.closeModal}>
                    <img src='img/closeModal.png' alt='close' onClick={() => setActiveModal(false)} />
                </div>
                <h2>Написать нам</h2>
                <div className={styles.basicWrapper}> 
                    <input placeholder="имя" />
                    <input placeholder="почта" />
                    <textarea placeholder="сообщение" />
                    <button className={styles.send}>Отправить</button>
                    <div className={styles.imgWrapper}>
                        <TelegramIcon className={styles.socialMedia} />
                        <WhatsAppIcon className={styles.socialMedia} />
                        <FacebookIcon className={styles.socialMedia} />
                        <MailOutlineIcon className={styles.socialMedia} />
                    </div>
                </div>
            </div>
        </div>
    );
};
