import photos from '../assets/images/photosCollage.jpg'
import styles from '../css/shared.module.css'


export const ProjectSection = () => {
    return (
        <section id="project" className="flex justify-center items-center bg-green-950 p-20 px-14 sm:px-16 md:px-20 gap-10 md:gap-6 lg:gap-20">
            <img src={photos} alt="Logo" className="hidden lg:block lg:w-[30%] h-auto relative" />
            <div className=" flex flex-col justify-center items-center gap-8 md:w-10/12 lg:w-6/12">
                <h5 className={`font-roboto font-semibold text-2xl text-center tracking-widest text-gray-900 dark:text-white ${styles['text-shadow']}`}>PROJECT</h5>
                <p className="font-roboto mb-3 font-normal text-justify text-lg text-gray-700 leading-10 dark:text-gray-400">
                    This NFT collection has been created, where each one will represent 1 hectare of land. For every NFT you purchase, 1 hectare of real Amazon rainforest will be saved from deforestation. Through this initiative, we aim to raise funds to preserve the forest by certifying Carbon Credits and trading them in the voluntary CO2 market.
                    <br />
                    <br />
                    Through these mechanisms, we will fight against illegal logging and mining on these lands, providing tools and resources to enforce property rights. Additionally, as part of the project, assets will be incorporated for small farmers who protect the rainforest. It is important to highlight that the project aligns with the REDD+ program, a collaborative initiative of the United Nations to reduce emissions from deforestation and forest degradation.
                </p>
            </div>
        </section>
    )
}
