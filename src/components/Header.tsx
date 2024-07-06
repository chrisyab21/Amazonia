
import logo from '../assets/images/LogoPrincipal.jpeg';
import styles from './header.module.css';
import logo2 from '../assets/images/S-AMZ1.png';

export const Header = () => {
  return (
    <header id="header" className={`${styles.headerBackground} flex items-center justify-center h-[70vh] sm:aspect-16/8 sm:h-auto`}>
      <div className=" flex flex-col items-center relative gap-4">
        <img src={logo2} alt="Logo" className="w-[20%] h-auto sm:w-[20%]" />
        <h1 className={`${styles.interFont} text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl `}>Welcome to Safe Amazing <br /> Amazonas</h1>
      </div>
    </header>
  );
};
