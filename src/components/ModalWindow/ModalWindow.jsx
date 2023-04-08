import styles from './styles.module.scss';

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const ModalWindow = ({ setActiveModal }) => {
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
                    <button className={styles.send} onClick={() => setActiveModal(false)}>Отправить</button>
                    <div className={styles.imgWrapper}>
                        <a href='https://t.me/edencompanytech'
                           target='_blank'
                           rel='noreferrer'>
                            <TelegramIcon className={styles.socialMedia} />
                        </a>
                        <a href='https://wa.me/+905056328364'
                           target='_blank'
                           rel='noreferrer'>
                            <WhatsAppIcon className={styles.socialMedia} />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100089154881151&is_tour_completed=true'
                           target='_blank'  
                           rel='noreferrer'>
                            <FacebookIcon className={styles.socialMedia} />
                        </a>
                        <a href='https://edencompanytech@gmail.com' 
                           target='_blank'  
                           rel='noreferrer'>
                            <MailOutlineIcon className={styles.socialMedia} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
