import shadowTree from '../assets/images/shadowTree.jpg';


export const VisionSection = () => {
  return (
    <section className="bg-green-950 h-[800px]">
      <img className="h-full w-full object-cover" src={shadowTree} alt="" />
    </section>
  );
};


export const VisionSection2 = () => {
  return (
    <section className="bg-green-950 h-[600px]">
      <img className="h-full w-full object-cover" src={shadowTree} alt="" />
    </section>
  );
};


/*<div className="h-[600px] flex flex-row justify-center items-center px-4 bg-opacity-40 bg-green-800 gap-4">
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> La amazonia Boliviana alberga mas de 200 especias de fauna y flore animal que deben ser preservadas</p>
<a href="#">
  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Vision</h5>
</a>
</div>*/