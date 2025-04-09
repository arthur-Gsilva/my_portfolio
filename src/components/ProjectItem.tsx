type Props = {
    image: string,
    title: string,
    text: string,
    inverse: boolean
}

export const ProjectItem = ({ image, title, text, inverse }: Props) => {
    return(
        <div 
            className="flex gap-12"
            style={{ flexDirection: inverse ? 'row-reverse' : 'row'}}
        >
            <div className="h-full">
                <img src={image} alt={title} className="rounded-md h-full"/>
            </div>

            <div className="flex flex-col gap-8 order-1">
                <h2 className="text-3xl font-bold">{title}</h2>

                <p>{text}</p>

                <div>
                    <button className="button mr-6">Repository</button>
                    <button className="button">Project</button>
                </div>
            </div>
        </div>
    )
}