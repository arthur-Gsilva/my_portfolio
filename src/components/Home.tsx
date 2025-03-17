export const Home = () => {
    return(
        <div className="flex flex-col md:flex-row mt-10 container px-8 md:mx-auto gap-10 items-center">
            <div>
                <h1 className="text-3xl md:text-6xl mb-5">Good to see you! <br /> My name is Arthur Silva.</h1>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero, consequatur at quod asperiores deserunt placeat officiis maxime voluptates, sit sapiente voluptatibus! Minima eveniet, dolor odit quaerat eius sequi ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam ratione earum, nemo necessitatibus fugit sit saepe labore deleniti aliquam numquam quidem at officiis ea vero magni? Autem, expedita vitae!</p>

                <div className="mt-10 flex items-center gap-15">
                    <div className="border border-blue-900 p-3 rounded-full cursor-pointer hover:bg-blue-900 transition">Talk with me</div>
                    <div className="border border-blue-900 p-3 rounded-full cursor-pointer hover:bg-blue-900 transition">Download CV</div>
                </div>
            </div>

            <div>
                <img src="/me.JPG" alt="" className="h-[400px]"/>
            </div>
        </div>
    )
}