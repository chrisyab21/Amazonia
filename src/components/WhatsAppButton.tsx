import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from '../css/whatsAppButton.module.css'


export const WhatsAppButton = () => {
    return (

        <div className={`${styles['whatsapp-btn-container']}`}>
            <a className={`${styles['whatsapp-btn']}`} href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}>
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <span>Contact Us</span>
        </div>
    )
}
