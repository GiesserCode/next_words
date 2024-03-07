"use client"
import {buttons} from "@/app/ui/navigation/NavigationText";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SignOut} from "@/app/ui/actions";

const Navigation = () => {
    const pathname = usePathname()
    return (<nav className={"fixed w-[300px] min-h-screen bg-darkBackground"}>
        <div className={"relative h-screen w-[calc(100% - 40px)] mx-5"}>
            <h1 className={"my-5 text-5xl tracking-tight"}>Words</h1>
            <div className={"flex flex-col gap-5"}>
                {buttons.map((item, index) => (
                    <Link
                        className={`w-full relative bg-transparent rounded-xl h-12 text-xl grid place-items-center outline-0 focus:outline-none focus:border-main ${pathname === item.link ? "background-gradient text-main" : "border border-second text-second"}`}
                        href={item.link} key={index}>
                        <div className={`absolute left-2 text-${pathname === item.link ? "main" : "second"}`}>
                            {pathname === item.link ? item.lightIcon : item.icon}
                        </div>
                        {item.name}
                    </Link>
                ))}
            </div>
            <form action={SignOut}>
                <button type={"submit"} className={`w-full absolute bg-transparent rounded-xl h-12 text-xl grid place-items-center outline-0 focus:outline-none focus:border-main border border-second text-second bottom-10`}>
                    Sign Out
                </button>
            </form>
        </div>
    </nav>)
}

export default Navigation