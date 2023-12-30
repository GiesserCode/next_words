'use client'
import {useDebouncedCallback} from 'use-debounce';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {LupeSVG, PlusSVG, XSVG} from "@/components/SVGs";
import {addNewUserWordset} from "@/app/ui/actions";
import {useState} from "react";

const Search = ({query}: any) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const [addVisible, setAddVisible] = useState(false)
    const handleClick = () => {
        setAddVisible(!addVisible);
    }

    return <>
        <div className={`w-full h-full min-h-screen absolute top-0 left-0 bg-transBackground bg-opacity-40 grid place-items-center z-20 ${addVisible ? "visible" : "hidden"}`}>
            <div className={"bg-transBackground w-[500px] p-5 rounded-2xl border border-lightBackground relative"}>
                <h3 className={"text-2xl mb-5"}>Add new wordset</h3>
                <form className={"flex gap-2 w-full"} action={() => {addNewUserWordset; handleClick}}>
                    <input className="bg-transparent border border-lightBackground rounded-xl p-2 w-full text-xl placeholder-second text-main outline-0 focus:outline-none"
                           placeholder={"Enter wordset id here"}
                           required={true}
                           name="wordsetId"
                           autoComplete={"off"}
                    />
                    <button className={"background-gradient px-2 rounded-xl"}>Add</button>
                </form>
                <div className={"absolute right-3 top-3 cursor-pointer"} onClick={handleClick}>
                    <XSVG />
                </div>
            </div>
        </div>
        <div className={"flex h-[55px] w-full justify-between gap-5 mb-10"}>
            <div className={"w-full h-full bg-transBackground bg-opacity-40 rounded-xl flex items-center px-3 gap-3"}>
                <LupeSVG />
                <input
                className="bg-transparent w-full text-xl placeholder-second text-main outline-0 focus:outline-none"
                placeholder={"Search Learning sets"}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={query}
            />
            </div>
        <button onClick={handleClick} className={"w-[55px] grid place-items-center relative h-full background-gradient rounded-xl text-2xl text-main"}>
            <PlusSVG />
        </button>
    </div>
    </>
}

export default Search