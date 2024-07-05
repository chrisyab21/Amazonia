import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/whatsAppButton.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const WhatsAppButton = () => {
    return (

        <div className="whatsapp-btn-container">
            <a className="whatsapp-btn" href="https://wa.me/91999999999">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <span>Contact Us</span>
        </div>
    )
}
