import { Header } from "@/components/Header"
import { Home } from "@/components/Home"

const page = () => {
    return(
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <Home />
        </div>
    )
}

export default page