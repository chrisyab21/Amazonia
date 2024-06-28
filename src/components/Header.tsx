
import logo from '../assets/images/LogoPrincipal.jpeg';
import styles from './header.module.css';
import logo2 from '../assets/images/S-AMZ1.png';

export const Header = () => {
  return (
    <header className={`${styles.headerBackground} flex items-center justify-center h-[70vh] sm:aspect-16/8 sm:h-auto`}>
      <div className=" flex flex-col items-center absolute overflow-hidden gap-2 lg:gap-4">
        <img src={logo2} alt="Logo" className="w-[15%] sm:w-[20%] h-auto relative" />
        <h1 className="font-mono text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl text-center">Saving Amazing <br /> Amazonas</h1>
      </div>
    </header>
  );
};



export const Visionheader3 = () => {
  return (
    <header className={`${styles.headerBackground} flex items-center justify-center h-[70vh] sm:aspect-16/8 sm:h-auto`}>
      <div className='flex items-center gap-2 sm:gap-10 justify-center h-auto w-full relative'>
        <div className="max-h-full relative overflow-hidden">
          <h1 className='font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center'>Saving Amazing <br /> Amazonas</h1>
        </div>
        <img src={logo2} alt="Logo" className="w-4/12 sm:w-3/12 h-auto relative " />
      </div>
    </header>
  );
};