
import styles from './header.module.css';
import logo2 from '../assets/images/S-AMZ1.png';

export const Header = () => {
  return (
    <header id="header" className={`${styles.headerBackground} flex items-center justify-center h-[70vh] sm:aspect-16/8 sm:h-auto`}>
      <div className=" flex flex-col items-center relative gap-4">
        <img src={logo2} alt="Logo" className="w-[20%] h-auto" />
        <h1 className={`${styles.interFont} ${styles['text-shadow']} text-center text-[34px]/snug sm:text-[38px]/snug md:text-[42px]/snug lg:text-[50px]/snug xl:text-6xl/snug`}>SAFE AMAZING <br className='lg:hidden' /> AMAZONAS</h1>
      </div>
    </header>
  );
};
