import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";


export const Techs = () => {
    return(
        <div className="flex gap-6">
            <div>
                <FaHtml5 className="text-7xl"/>
                Html5
            </div>
            <div>
                <FaCss3Alt />
                CSS3
            </div>
            <div>
                <IoLogoJavascript />
                Javascript
            </div>
            <div>
                <RiTailwindCssFill />
                Tailwind
            </div>
            <div>
                <FaReact />
                React
            </div>
            <div>
                <SiNextdotjs />
                Next
            </div>
            <div>
                <IoLogoNodejs />
                Node.js
            </div>
            <div>
                <TbBrandReactNative />
                React Native
            </div>
            <div>
                <BiLogoMongodb />
                Mongodb
            </div>
        </div>
    )
}