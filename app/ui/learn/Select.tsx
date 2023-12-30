'use client'

import {ArrowDownSVG} from "@/components/SVGs";
import {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Select = ({wordsets_user, currentWordset}: any) => {
    const [visible, setVisible] = useState(false)

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleClick = () =>{
        setVisible(!visible)
    }

    const setNewLink = (term: any) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
        handleClick()
    }

    return <div className={"w-full text-center flex justify-center items-center mb-8"}>
        <div className={"w-[30px] h-[30px]"}></div>
        <div className={"relative bg-transparent text-main text-4xl px-4 min-w-[500px]"}>
            <div onClick={handleClick}>{currentWordset[0].title}</div>
            <div className={`absolute w-full text-center mt-4 py-4 bg-transBackground bg-opacity-40  ${visible ? "visible" : "hidden"} rounded-2xl flex flex-col gap-4 items-center`}>
                {wordsets_user.map((item: any, index: any) => (
                    item[0].id !== currentWordset[0].id && (
                        <button
                            className={`bg-transBackground z-20 mx-4 w-11/12 rounded-xl whitespace-nowrap p-2 text-2xl`}
                            key={index}
                            onClick={() => setNewLink(item[0].id)}
                            value={item[0].title}
                        >
                            {item[0].title}
                        </button>
                    )
                ))}
            </div>
        </div>
        <div className="inset-y-0 flex items-center px-2 pointer-events-none">
            <i className="fas fa-chevron-down"></i>
            <ArrowDownSVG />
        </div>
    </div>
}

export default Select