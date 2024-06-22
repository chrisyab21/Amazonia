import shadowTree from '../assets/images/shadowTree.jpg';
import hero from '../assets/images/hero-bg.png';
import noche from '../assets/images/AmazoniaNoche.webp';
import selva from '../assets/images/SelvaVerde.webp';
import logo from '../assets/images/LogoPrincipal.jpeg';
import styles from './visionSection.module.css';

export const VisionSection = () => {
  return (
    <section className={`${styles.sectionBackground} flex items-center justify-center h-96 sm:h-[450px] md:h-[550px] lg:h-[676px] `}>
        <img className="absolute w-2/6 h-[42%] md:w-2/6 md:h-[45%] lg:w-2/6 lg:h-[52%] aspect-square" src={logo} alt="Logo Principal" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi molestiae saepe dicta a, dolorum incidunt veritatis vero nihil temporibus alias repellendus pariatur quam, ex et doloremque, maiores maxime harum!</p>
      </section>
  );
};
