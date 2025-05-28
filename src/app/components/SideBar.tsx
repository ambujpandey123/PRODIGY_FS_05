import { GroupIcon, Home, LucideGroup, LucideMessageCircleQuestion, PersonStanding, Search,  } from "lucide-react"
import Link from "next/link"
import { PacificoFont } from "@/app/lib/Font";
 

export default function SideBar() {
    const link = [
        {
            name: "Home",
            link: "/",
            icon: <Home />
        },
        {
            name: "Explore",
            link: "/explore",
            icon: <Search />
        },
        {
            name: "Profile",
            link: "/profile",
            icon: <PersonStanding />
        },
        {
            name: "Sponcers",
            link: "/sponcers",
            icon: <LucideGroup />
        },
        {
            name: "help",
            link: "/help",
            icon: <LucideMessageCircleQuestion />
        },
    ]
    return (
        <section className="w-[200px] border-r h-screen pt-10 ml-20">
                <div className="h-[50px] flex items-center justify-center mb-10 pr-5">
                    {<span className="text-3xl font-bold hover:text-gray-700 text-shadow-md 
            text-shadow-gray-300"><span className={PacificoFont.className}>MyShocial</span></span>}
                </div>
            <ul className="w-full flex flex-col gap-4 p-1">
                {
                    link.map((items) => (
                        <Link href={items.link} key={items.name}>
                            <li className="flex gap-3 items-center font-bold px-4 py-2 hover:bg-gray-200  transition-all duration-200 rounded-[5px]">
                                <span className="text-5xl">{items.icon}</span>
                                <span>{items.name}</span>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </section>
    )
}