import logo4 from '../assets/images/Arbol3.png';

export const VisionSection = () => {

  return (
    <section id="vision" className="flex justify-center items-center bg-green-950 p-20 md:p-20 gap-10 md:gap-6 lg:gap-20">
      <img src={logo4} alt="Logo" className="hidden lg:block lg:w-[30%] h-auto relative" />
      <div className=" flex flex-col justify-center gap-6 items-center md:w-10/12 lg:w-6/12">
        <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Vision</h5>
        <p className="font-roboto mb-3 font-normal text-justify text-lg text-gray-700 leading-10 dark:text-gray-400">
          Become leaders in the implementation of REDD+ projects, demonstrating that it is possible to reconcile forest conservation with sustainable development.
          <br />
          <br />
          We aim to be a benchmark in the fight against climate change, inspiring other stakeholders to join this important cause and achieve a greener and more resilient future for generations to come.
        </p>
      </div>
    </section>
  );
};
