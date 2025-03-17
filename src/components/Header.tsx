import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const Header = () => {
    return(
        <header className="flex justify-between items-center container px-8 md:mx-auto pt-5">
            <h1>Arthur Silva</h1>
            <nav className="flex items-center gap-4 text-2xl">
                <FaLinkedin className="cursor-pointer"/>
                <FaGithub className="cursor-pointer"/>
            </nav>
        </header>
    )
}