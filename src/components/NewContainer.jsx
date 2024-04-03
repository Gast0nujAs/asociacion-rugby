import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
    return (
        <aside className="bg-VeryDarkBlue text-white py-[28px] sm:px-[100px] sm:h-[800px]">
            <h2 className="text-SoftOrange text-[30px] text-center sm:text-4xl font-bold">ARPRO</h2>
            <NewArticle 
                title="Mision"
                text="Nuestra misión en el Programa Club Alto Rendimiento es proporcionar una experiencia educativa integral,
                 priorizando el desarrollo físico, psicológico, emocional y social de niños, jóvenes y deportistas.
                "
            />
            <NewArticle 
                title="Dirección"
                text="Estableceremos estrategias claras y directrices para impulsar un entorno deportivo profesional en la región. 
                En esta base, se trata de trazar un camino estratégico que guíe el desarrollo del proyecto.
                "
            />
            <NewArticle 
                title="Vision"
                text="Ser líderes en el desarrollo deportivo profesional, fomentando una base y objetivo profesional en el rugby, 
                priorizando el respeto y la responsabilidad en el trabajo en equipo, especialmente en los jóvenes deportistas."
            />
        </aside>
    )
}