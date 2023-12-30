'use server'
import {PenSVG} from "@/components/SVGs";
import {getUserData, getWordsetsData} from "@/app/ui/actions";
import Link from "next/link";

const Wordsets = async () => {
    const accounts = await getUserData()
    const wordsdata = await getWordsetsData(accounts)

    return <div className={"w-full flex px-10 mb-8 cursor-pointer"}>
        {wordsdata.map((item, index) => (
            <Link href={`/learn?query=${item[0].id}`} key={index} className={"h-[120px] bg-transBackground bg-opacity-40 rounded-2xl p-[10px] mr-5"}>
                <div className={"w-full h-full"}>
                    <div className={"h-[40px] mb-[10px] flex justify-between text-second text-lg"}>
                        <PenSVG/>
                        <p>{item[0].numberOfWords} Words</p>
                    </div>
                    <div
                        className={"h-[50px] bg-lightBackground bg-opacity-40 py-2 px-4 rounded-xl text-main text-xl grid place-items-center tracking-wide"}>
                        {item[0].title}
                    </div>
                </div>
            </Link>

        ))}
    </div>
}

export default Wordsets