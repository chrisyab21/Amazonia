
import logo from '../assets/images/LogoPrincipal.jpeg';
import styles from './header.module.css';
import logo2 from '../assets/images/S-AMZ1.png';

export const Header = () => {
  return (
    <header className={`${styles.headerBackground} flex items-center justify-center h-[70vh] sm:aspect-16/8 sm:h-auto`}>
      <div className=" flex flex-col items-center absolute overflow-hidden gap-2 lg:gap-4">
        <img src={logo2} alt="Logo" className="w-[15%] sm:w-[20%] h-auto relative" />
        <h1 className="font-mono text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl text-center">Safe Amazing <br /> Amazonas</h1>
      </div>
    </header>
  );
};
