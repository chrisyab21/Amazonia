import logo4 from '../assets/images/Arbol3.png';
import styles from '../css/shared.module.css'


export const VisionSection = () => {

  return (
    <section id="vision" className="flex justify-center items-center bg-green-950 p-20 px-14 sm:px-16 md:px-20 gap-10 md:gap-6 lg:gap-20">
      <img src={logo4} alt="Logo" className="hidden lg:block lg:w-[30%] h-auto relative" />
      <div className=" flex flex-col justify-center items-center gap-8 md:w-10/12 lg:w-6/12">
        <h5 className={`font-roboto font-semibold text-2xl text-center tracking-widest text-gray-300 dark:text-white ${styles['text-shadow']}`}>VISION</h5>
        <p className="font-roboto mb-3 font-normal text-justify text-lg text-gray-300 leading-10 dark:text-gray-300">
          Become leaders in the implementation of REDD+ projects, demonstrating that it is possible to reconcile forest conservation with sustainable development.
          <br />
          <br />
          We aim to be a benchmark in the fight against climate change, inspiring other stakeholders to join this important cause and achieve a greener and more resilient future for generations to come.
        </p>
      </div>
    </section>
  );
};
