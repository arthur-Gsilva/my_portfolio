import { ProjectItem } from "./ProjectItem"

export const Projects = () => {
    return(
        <div className="mt-10 container px-8 md:mx-auto pb-8">
            <h2 className="text-center text-3xl mb-8">Projects</h2>
        
            <div className="flex flex-col gap-12">
                <ProjectItem 
                    image="/globo-project.png"
                    text="A system developed during the residency for the company Globo TV. In this system, the user can select the cameras and add them to the script, after which he can select them to start transmitting the image from the cameras. In addition, you can activate the microphone and call the camera with your voice, calling it and being transmitted automatically. Project made with Next + typescript"
                   title="Globo residence"
                   inverse={false}
                />
                <ProjectItem 
                    image="/residence.png"
                    text="A system developed during the residency for the company Accenture. In it, the user will analyze their resume in relation to a specific vacancy. An AI was to do this analysis and return negative and positive points, what to improve and render this on the screen. The front end also has the dropzone functionality and the ability to select only images on your machine. Project made with Next + typescript"
                   title="Curriculum Analysis with AI" 
                   inverse
                />
            </div>
        </div>
    )
}