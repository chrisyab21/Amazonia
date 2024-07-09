import { FC } from 'react';
import styles from '../css/buttonComponent.module.css'
import { Spinner } from './Spinner';



type props = {

    disabled: boolean
}

export const ButtonComponent: FC<props> = ({ disabled }) => {

    return (
        <button
            disabled={disabled}
            className={`w-full basis-14 flex-shrink-0 rounded-md bg-blue-900 bg-opacity-80 disabled:bg-gray-800 disabled:hover:bg-green-800 hover:bg-green-700  enabled:focus:bg-green-700 
            ${styles['button-active']} transition duration-300 ease-in-out ${styles['custom-shadow']} ${styles['button-hover']} 
            focus:outline-none text-lg text-gray-200 font-rubik disabled:text-gray-400 tracking-wide`}
        >
            {disabled ? (<><Spinner /> Loading </>) : <>Submit</>}
        </button>
    );
};
