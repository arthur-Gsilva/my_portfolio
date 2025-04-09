import { ProjectItem } from "./ProjectItem"

export const Projects = () => {
    return(
        <div className="mt-10 container px-8 md:mx-auto pb-8">
            <h2 className="text-center text-3xl mb-8">Projetos</h2>
        
            <div className="flex flex-col gap-12">
                <ProjectItem 
                    image="/globo-project.png"
                    text="Um sistema desenvolvido durante a residência para a empresa Globo tv. Nesse sistema, o usuário pode selecionar as câmeras e adiciona-las ao roteiro, após isso ele pode seleciona-las para começar a transmissão da imagem das câmeras. Além disso, você pode ativar o microfone e chamar a câmera pela sua voz, chamando ela e sendo transmitida automaticamente. Projeto feito com Next + typescript"
                   title="Globo residência"
                   inverse={false}
                />
                <ProjectItem 
                    image="/residence.png"
                    text="Um sistema desenvolvido durante a residência para a empresa Accenture. Nela o usuário fará uma análise de seu currículo em relação a uma vaga especifica. Uma IA era fazer essa análise e retornar pontos negativos, positivos, o que melhorar e renderizar isso na tela. o front ele tem também a funcionalidade de dropzone e de selecionar na sua máquina, apenas imagens. Projeto feito com Next + typescript"
                   title="Análise curricular com IA" 
                   inverse
                />
            </div>
        </div>
    )
}