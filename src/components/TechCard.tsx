import { GiCrossedSwords, GiShoulderArmor, GiSpellBook } from "react-icons/gi";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiNestjs } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { IoServer } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";

import { SiMysql } from "react-icons/si";

type Props = {
    title: string,
    text: string,
    color: string,
    front?: boolean,
    back?: boolean,
    bd?: boolean
}

export const TechCard = ({ title, text, color, front, back, bd }: Props) => {
    return(
        <div 
            className={`border-2  p-3 rounded-lg flex flex-col gap-4 items-center`}
            style={{ borderColor: color }}
        >
            <h3 className="text-2xl">{title}</h3>

            {front &&
                <GiCrossedSwords 
                    className='text-4xl'
                    style={{ color: color }}
                />
            }
            {bd &&
                <GiShoulderArmor  
                    className='text-4xl'
                    style={{ color: color }}
                />
            }
            {back &&
                <GiSpellBook 
                    className='text-4xl'
                    style={{ color: color }}
                />
            }
            

            <p className="italic text-center">&quot;{text}&quot;</p>

            <div className="grid grid-cols-3 gap-8 my-10">
                {front &&
                    <>
                        <FaHtml5 className="text-4xl"/>
                        <FaCss3Alt className="text-4xl"/>
                        <IoLogoJavascript className="text-4xl"/>
                        <RiTailwindCssFill className="text-4xl"/>
                        <FaReact className="text-4xl"/>
                        <SiNextdotjs className="text-4xl"/>
                        <TbBrandReactNative className="text-4xl"/>
                    </>
                }

                {back &&
                    <>
                        <IoLogoNodejs className="text-4xl"/>
                        <SiNestjs className="text-4xl"/>
                        <SiZod className="text-4xl"/>
                        <SiExpress className="text-4xl"/>
                        <FaPhp className="text-4xl"/>
                        <FaLaravel className="text-4xl"/>
                    </>
                }

                {bd &&
                    <>
                        <SiMysql className="text-4xl"/>
                        <BiLogoMongodb className="text-4xl"/>
                        <IoServer className="text-4xl"/>
                        <FaAws className="text-4xl"/>
                        <SiPrisma className="text-4xl"/>
                    </>
                }
            </div>
        </div>
    )
}