'use client'

import {DarkPlusSVG, PenSVG, TrashSVG} from "@/components/SVGs";
import {useState} from "react";
import {createNewLearningSet} from "@/app/ui/actions";

const CreateInput = ({query, dataWords, title, des}: any) => {
    const [words, setWords] = useState(dataWords ? dataWords : [{ definition: "", word: ""}])
    const handleDefinitionChange = (e: any, index: any) => {
        const updatedWords = [...words];
        updatedWords[index] = { ...updatedWords[index], definition: e.target.value };
        setWords(updatedWords);
    };

    const handleWordChange = (e: any, index: any) => {
        const updatedWords = [...words];
        updatedWords[index] = { ...updatedWords[index], word: e.target.value };
        setWords(updatedWords);
    };

    const handleDelete = (index: any) => {
        const updatedWords = [...words];
        updatedWords.splice(index, 1);
        setWords(updatedWords);
    };

    const addNewWord = () => {
        setWords([...words, { definition: "", word: "" }]);
    };

    const handleInput = (index: any) => {
        if (index !== words.length - 1 && words[index].word === "" && words[index].definition === "") {
            const updatedWords = [...words];
            updatedWords.splice(index, 1);
            setWords(updatedWords);
        }
        words.length === index + 1 && addNewWord()
    };

    return <form className={"w-full flex flex-col items-center"} action={(e) => createNewLearningSet(e, words, query)}>
            <div className={"relative text-center flex mb-5"}>
                <input type={"text"}
                       name={"title"}
                        defaultValue={title ? title : "New learning set"}
                       autoComplete={"off"}
                        className={"bg-transparent text-4xl text-main border-0 outline-0 focus:outline-none focus:border-0 text-center"}
                />
                <div className={"absolute right-0 h-full grid place-items-center"}>
                    <PenSVG />
                </div>
            </div>
            <div className={"relative text-center flex mb-10"}>
                <input type={"text"}
                       name={"des"}
                       defaultValue={des ? des : "This is a description of the set."}
                       autoComplete={"off"}
                       className={"bg-transparent text-2xl text-second border-0 outline-0 focus:outline-none focus:border-0 text-center px-[88px]"}
                />
                <div className={"absolute right-0 h-full grid place-items-center"}>
                    <PenSVG />
                </div>
            </div>
        {words.map((item: any, index: any) => (
            <div key={index} className={"w-full bg-transBackground bg-opacity-40 p-5 rounded-2xl mb-5"}>
                <div className={"w-full mb-5 flex justify-between text-second text-2xl"}>
                    <p>{index + 1}.</p>
                    <div onClick={() => handleDelete(index)}>
                        <TrashSVG />
                    </div>
                </div>
                <div className={"h-12 flex gap-5 mb-2"}>
                    <input className={"border-0 outline-0 focus:outline-none focus:border-0 h-full bg-lightBackground bg-opacity-40 text-main placeholder-second rounded-xl p-2 w-1/2"}
                           type="text"
                           value={item.definition}
                           onChange={(e) => handleDefinitionChange(e, index)}
                           onBlur={() => handleInput(index)}
                           placeholder={"Enter a word"}
                    />
                    <input className={"border-0 outline-0 focus:outline-none focus:border-0 h-full bg-lightBackground bg-opacity-40 text-main placeholder-second rounded-xl p-2 w-1/2"}
                           type="text"
                           onChange={(e) => handleWordChange(e, index)}
                           onBlur={() => handleInput(index)}
                           placeholder={"Enter a word"}
                           value={item.word}
                    />
                </div>
                <div className={"w-full flex gap-5"}>
                    <p className={"text-second text-sm w-1/2 tracking-wide"}>Definition</p>
                    <p className={"text-second text-sm w-1/2 tracking-wide"}>Word</p>
                </div>
            </div>
        ))}
        <div className={"w-full h-40 bg-transBackground bg-opacity-40 p-5 rounded-2xl mb-5 grid place-items-center cursor-pointer"} onClick={addNewWord}>
            <p className={"flex text-second text-xl"}><DarkPlusSVG />Add new Card</p>
        </div>
        <button className={"background-gradient p-5 rounded-xl text-main"}>{dataWords ? "Update learning set" : "Create new learning set"}</button>
        </form>
}

export default CreateInput