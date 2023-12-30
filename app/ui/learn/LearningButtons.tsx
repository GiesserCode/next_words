import Link from "next/link";
import {CardsSVG, ChoiceSVG, LearnSVG} from "@/components/SVGs";

const LearningButtons = ({wordsetId}: any) => {
    return <div className={"w-full grid place-items-center mb-5"}>
        <div className={"flex gap-5 text-main"}>
            <Link className={"flex bg-transBackground bg-opacity-40 rounded-2xl relative w-[260px] h-[60px] justify-center items-center text-2xl"} href={`/learn/cards?query=${wordsetId}`}>
            <div className={"absolute left-5"}><CardsSVG /></div>
            Cards
        </Link>
            <Link className={"flex bg-transBackground bg-opacity-40 rounded-2xl relative w-[260px] h-[60px] justify-center items-center text-2xl"} href={`/learn/learn?query=${wordsetId}`}>
                <div className={"absolute left-5"}><LearnSVG color={"#DDDDDD"} /></div>
                Learn
            </Link>
            <Link className={"flex bg-transBackground bg-opacity-40 rounded-2xl relative w-[260px] h-[60px] justify-center items-center text-2xl"} href={`/learn/choice?query=${wordsetId}`}>
                <div className={"absolute left-5"}><ChoiceSVG /></div>
                Choice
            </Link>
        </div>
    </div>
}

export default LearningButtons