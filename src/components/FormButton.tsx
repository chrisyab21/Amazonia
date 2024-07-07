import styles from '../css/formButton.module.css'

export const FormButton = () => {
    return (
        <button
            className={`bg-blue-700 w-full basis-14 flex-shrink-0 rounded-md text-lg hover:bg-green-600 focus:bg-blue-800 
            ${styles['button-active']} transition duration-300 ease-in-out ${styles['custom-shadow']} ${styles['button-hover']} 
            focus:outline-none ${styles['focus-ring']} focus:ring-blue-300`}>
            Send
        </button>
    );
};
