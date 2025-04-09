export const Home = () => {
    return(
        <div className="flex flex-col md:flex-row mt-10 container px-8 md:mx-auto gap-10 items-center">
            <div>
                <h1 className="text-3xl md:text-6xl mb-5">Good to see you! <br /> My name is Arthur Silva.</h1>
                <p className="text-xl">Systems Analysis and Development student at Senac College and passionate about technology since 2021, when I started my programming journey. Since then, I have been exploring both the front and back-end, with the goal of becoming a full stack developer. What motivates me most in this area is the possibility of creating real solutions to everyday problems; seeing an idea come to life on the screen is simply incredible. I am constantly curious, I like to learn new things and I feel fulfilled when I see a system working from end to end.
                Outside of coding, I am a fan of RPGs, gym and soccer (although I prefer to watch it than play it).</p>

                <div className="mt-10 flex items-center gap-15">
                    <div className="button">Talk with me</div>
                    <div className="button">Download CV</div>
                </div>
            </div>

            <div>
                <img src="/me.JPG" alt="" className="h-[400px] md:h-auto"/>
            </div>
        </div>
    )
}