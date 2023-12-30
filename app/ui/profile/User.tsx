'use client'
import { BigUserSVG, PenSVG } from "@/components/SVGs";
import { handleSubmit } from "@/app/ui/actions";
import {useState} from "react";

type UserProps = {
    name: string;
};

const User = ({ name }: UserProps) => {
    const [dafaultName, setDefaultName] = useState(name)
    return (
        <div className={"flex gap-5 text-main"}>
            <div className={"w-[120px] h-[120px] bg-transBackground bg-opacity-40 rounded-xl grid place-items-center"}>
                <BigUserSVG />
            </div>
                <form className={"flex gap-2 items-center h-min"} action={handleSubmit}>
                    <input
                        type="text"
                        defaultValue={dafaultName}
                        name="note"
                        className="bg-transparent text-2xl text-main border-0 outline-0 focus:outline-none focus:border-0 peer"
                        autoComplete={"off"}
                    />
                    <button type="submit" className={"peer-focus:background-gradient rounded-xl p-2 transition duration-300 ease-in-out"}>
                        <PenSVG />
                    </button>
                </form>
        </div>
    );
};

export default User;
