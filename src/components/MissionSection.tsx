import logo2 from '../assets/images/S-AMZ1.png'
import logo3 from '../assets/images/Arbol4.png';

export const MissionSection = () => {

  return (
    <section className="flex justify-center items-center bg-AzulOscuro p-20 md:p-20 gap-10 md:gap-6 lg:gap-20">
      <div className=" flex flex-col justify-center items-center gap-6 md:w-10/12 lg:w-6/12">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Mision</h5>
        <p className="mb-3 font-normal text-justify text-lg text-gray-700 leading-10 dark:text-gray-400">
          Significantly contribute to the fight against climate change through the implementation of REDD+ projects (Reducing Emissions from Deforestation and Forest Degradation), with the goal of mitigating greenhouse gas emissions and promoting environmental sustainability.
          <br className="md:hidden" />
          <br className="md:hidden" />
          Achieve a significant reduction in greenhouse gas emissions from deforestation and forest degradation.        </p>
      </div>
      <img src={logo3} alt="Logo" className="hidden h-auto  relative lg:block lg:w-[30%]" />
    </section>
  );
};
