import logo4 from '../assets/images/Arbol3.png';

export const VisionSection = () => {

  return (
    <section className="flex justify-center items-center bg-green-950 p-20 md:p-20 gap-10 md:gap-6 lg:gap-20">
      <img src={logo4} alt="Logo" className="hidden lg:block lg:w-[30%] h-auto relative" />
      <div className=" flex flex-col justify-center items-center gap-6 md:w-10/12 lg:w-6/12">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Vision</h5>
        <p className="mb-3 font-normal text-justify text-lg text-gray-700 leading-10 dark:text-gray-400">
          Contribuir de manera significativa a la lucha contra el cambio climático a través de la implementación de proyectos REDD+ (Reducción de Emisiones por Deforestación y Degradación Forestal), con el objetivo de mitigar las emisiones de gases de efecto invernadero y promover la sostenibilidad ambiental.
          <br className="md:hidden" />
          <br className="md:hidden" />
          Lograr una reducción significativa de las emisiones de gases de efecto invernadero provenientes de la deforestación y la degradación forestal.
        </p>
      </div>
    </section>
  );
};
