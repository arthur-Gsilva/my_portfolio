import { Experiences } from "@/components/Experiences"
import { Header } from "@/components/Header"
import { Home } from "@/components/Home"
import { Projects } from "@/components/Projects"

const page = () => {
    return(
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <Home />
            <Experiences />
            <Projects />
        </div>
    )
}

export default page