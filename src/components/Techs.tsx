
import { TechCard } from "./TechCard";


export const Techs = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <TechCard 
                color="#e74c3c"
                title="Front-End"
                text="Transformando sua imaginação em realidade"
                front
            />
            
            <TechCard 
                color="#3498db"
                title="Back-End"
                text="A lógica por trás da aplicação"
                back
            />
            <TechCard 
                color="#f4d03f"
                title="Databases"
                text="Priorizando proteção e organização"
                bd
            />
            
        </div>
            
    )
}