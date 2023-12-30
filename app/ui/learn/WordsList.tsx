'use client'

import {FilledStarSVG, StarSVG} from "@/components/SVGs";
import {setStar} from "@/app/ui/actions";

const WordsList = ({currentWordset, currentUserWordset}: any) => {
    const userWordset = currentUserWordset.find((wordset: any) => wordset.id === currentWordset[0].id)

    const getStar = (id: any) => {
        const currentWord = userWordset.words.find((words: any) => words.id === id);

        if (currentWord) {
            return currentWord.star;
        } else {
            console.log("Word not found");
            return false;
        }
    }

    return <div>
        {currentWordset[0].words.map((item: any, index: any) => (
            <div key={index} className={"w-full bg-transBackground bg-opacity-40 mb-5 rounded-2xl flex items-center py-2 gap-5"}>
                <div className={"w-1/2 flex items-center"}>
                    <p className={"w-[60px] h-[60px] text-second text-2xl grid place-items-center"}>{index + 1}.</p>
                    <p className={"w-full bg-lightBackground bg-opacity-40 px-2 h-[50px] flex items-center text-main text-2xl rounded-xl"}>{item.definition}</p>
                </div>
                <div className={"w-1/2 flex items-center"}>
                    <p className={"w-full bg-lightBackground bg-opacity-40 px-2 h-[50px] flex items-center text-main text-2xl rounded-xl"}>{item.word}</p>
                    <p className={"w-[60px] h-[60px] text-second text-2xl grid place-items-center"} onClick={() => setStar(currentUserWordset, item.id)}>{
                        getStar(item.id) ? <FilledStarSVG /> : <StarSVG/>
                    }</p>
                </div>
            </div>
        ))}
    </div>
}

export default WordsList