"use client"
import {buttons} from "@/app/ui/navigation/NavigationText";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navigation = () => {
    const pathname = usePathname()
    return (<nav className={"w-[350px] h-screen bg-darkBackground"}>
        <div className={"w-[calc(100% - 40px)] mx-5"}>
            <h1 className={"my-5 text-5xl tracking-tight"}>Words</h1>
            <div className={"flex flex-col gap-5"}>
                {buttons.map((item, index) => (
                    <Link
                        className={`w-full relative bg-transparent rounded-xl h-12 text-xl grid place-items-center ${pathname === item.link ? "background-gradient text-main" : "border border-second text-second"}`}
                        href={item.link} key={index}>
                        <div
                            className={`absolute left-2 color-${pathname === item.link ? "main" : "second"}`}>{item.icon}</div>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    </nav>)
}

export default Navigation