import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const Header = () => {
    return(
        <header className="flex justify-between items-center container px-8 md:mx-auto pt-5">
            <h1>Arthur Silva</h1>
            <nav className="flex items-center gap-4 text-2xl">
                <Link href={'https://www.linkedin.com/in/arthurgabrielsilva/'} target="_blank">
                    <FaLinkedin className="cursor-pointer"/>
                </Link>

                <Link href={'https://github.com/arthur-Gsilva'} target="_blank">
                    <FaGithub className="cursor-pointer"/>
                </Link>
            </nav>
        </header>
    )
}