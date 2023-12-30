'use client'
import {PlusSVG, XSVG} from "@/components/SVGs";
import {useState} from "react";
import {addNewUserWordset} from "@/app/ui/actions";

const Plus = () => {
    const [addVisible, setAddVisible] = useState(false)
    const handleClick = () => {
        setAddVisible(!addVisible);
    }
    return <>
        <div className={`w-full h-full min-h-screen absolute top-0 left-0 bg-transBackground bg-opacity-40 grid place-items-center ${addVisible ? "visible" : "hidden"}`}>
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
        <div onClick={handleClick} className={"mt-2 cursor-pointer"}>
        <PlusSVG/>
    </div>
    </>
}

export default Plus