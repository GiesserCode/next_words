'use client'

import {useEffect, useState} from "react";

const WriteInput = ({userWordset, officialWordset}: any) => {
    const [currentUserWordset, setCurrentUserWordset] = useState(userWordset)
    const [currentOfficialWordset, setCurrentOfficialWordset] = useState(officialWordset)
    const [currentWord, setCurrentWord] = useState({"id":"f5a94aa4-7f07-4a2d-94a1-8f6f2e9de85a","word":"city","definition":"ville"})
    const [visible, setVisible] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [perfect, setPerfect] = useState(false)

    useEffect(() => {
        const initNewWord = () => {
            setCurrentWord(
                () => {
                    const notStartedWords = currentUserWordset.filter((item: any) => {
                        return item.done === false && item.wrong === 0 && item.id !== currentWord.id && item
                    });
                    const randomIndexStart = Math.floor(Math.random() * notStartedWords.length)
                    const newWord = currentOfficialWordset?.find((item: any) => {
                        return item.id === notStartedWords[randomIndexStart]?.id;
                    });
                    return newWord
                }
            )
        }
        initNewWord()
    }, []);

    const getNewWord = (event: any) => {
        event.preventDefault();
        const inputWord = event.target.elements.wordInput.value;
        event.target.elements.wordInput.readOnly = false;
        setVisible(false)
        console.log("getnewword")
        setCurrentWord(() => {
            let newWord
            const notDoneWrongWords = currentUserWordset.filter((item: any) => {
                return item.done === false && item.wrong > 0 && item.id !== currentWord.id && item
            });
            const notStartedWords = currentUserWordset.filter((item: any) => {
                return item.done === false && item.wrong === 0 && item.id !== currentWord.id && item
            });
            console.log("notDoneWrongWords: " + JSON.stringify(notDoneWrongWords))
            console.log("notDoneWrongWords length: " + notDoneWrongWords.length)
            console.log("notStartedWords: " + JSON.stringify(notStartedWords))
            console.log("notStartedWords length: " + notStartedWords.length)
            const randomIndexStart = Math.floor(Math.random() * notStartedWords.length)
            const randomIndexDone = Math.floor(Math.random() * notDoneWrongWords.length)
            const multiplikator = 1 / 5;
            const provability =
                Math.random() <
                (notDoneWrongWords.length > 0
                    ? multiplikator * notDoneWrongWords.length
                    : 0)
            console.log("randomIndexStart: " + randomIndexStart)
            console.log("randomIndexDone: " + randomIndexStart)
            if (provability) {
                if (notDoneWrongWords.length > 0){
                    if (notDoneWrongWords === 1) {
                        newWord = currentUserWordset.filter((item: any) => {
                            return item.done === false && item.wrong > 0 && item
                        });
                        console.log("1 last: " + notDoneWrongWords[randomIndexDone])

                    } else {
                        newWord = currentOfficialWordset?.find((item: any) => {
                            return item.id === notDoneWrongWords[randomIndexDone]?.id;
                        });
                        console.log("1: " + notDoneWrongWords[randomIndexDone])
                    }
                } else {
                    newWord = currentOfficialWordset?.find((item: any) => {
                        return item.id === notStartedWords[randomIndexStart]?.id;
                    });
                    console.log("2: " + notStartedWords[randomIndexStart])

                }
            }else {
                if (notStartedWords.length > 0) {
                    newWord = currentOfficialWordset?.find((item: any) => {
                        return item.id === notStartedWords[randomIndexStart]?.id;
                    });
                    console.log("3: " + notStartedWords[randomIndexStart])
                } else {
                 console.log("new wrong word");
                 newWord = currentOfficialWordset?.find((item: any) => {
                     return item.id === notDoneWrongWords[randomIndexDone]?.id;
                 });
                 console.log("4: " + notDoneWrongWords[randomIndexDone])
                }
            }
            return newWord ? newWord : {id:"f5a94aa4-7f07-4a2d-94a1-8f6f2e9de85a",word:"",definition:"Every word done"}
        });
        event.target.elements.wordInput.value = "";
        setPerfect(false)
    };

    const isAnswerCloseEnough = (word: any, input: any) => {
        const maxLengthDifference = 1;
        const minLengthDifference = 1;

        if (Math.abs(word.length - input.length) > maxLengthDifference) {
            return false;
        }

        const wordArray = word.split("");
        const inputArray = input.split("");

        let differences = 0;

        for (let i = 0; i < Math.min(wordArray.length, inputArray.length); i++) {
            // Ignore characters within parentheses
            if (wordArray[i] === "(" || wordArray[i] === ")") {
                continue;
            }

            if (wordArray[i] !== inputArray[i]) {
                differences++;
            }

            if (differences > maxLengthDifference) {
                return false;
            }
        }

        return (
            differences <= maxLengthDifference &&
            word.length - input.length <= minLengthDifference
        );
    }

    const checkWord = (event: any) => {

        event.preventDefault();

        const inputWord = event.target.elements.wordInput.value;
        event.target.elements.wordInput.readOnly = true;

        const sanitizedCorrectAnswer = currentWord.word.replace(/[()]/g, "");
        const sanitizedInput = inputWord.replace(/[()]/g, "");

        if (isAnswerCloseEnough(sanitizedCorrectAnswer, sanitizedInput)) {
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, done: true } : word
            );
            setCorrect(true)
            setVisible(true)
            setCurrentUserWordset(updatedUserWordset)
            console.log("true")
        } else {
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, wrong: word.wrong + 1 } : word
            );
            setCurrentUserWordset(updatedUserWordset)
            setCorrect(false)
            setVisible(true)
            console.log("wrong")
        }

        if (currentWord.word === inputWord){
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, done: true } : word
            );
            setCurrentUserWordset(updatedUserWordset)
            setPerfect(true)
            setVisible(false)
            console.log(updatedUserWordset)
            setTimeout(() => {
                setPerfect(false)
                getNewWord(event)
            }, 500);
        }
    };

    return <form className={"bg-transBackground bg-opacity-40 rounded-2xl p-5 flex flex-col gap-5"} onSubmit={(e) => {visible ? getNewWord(e) : checkWord(e)}}>
        <div className={"flex justify-between gap-5"}>
            <h2 className={"text-3xl text-main"}>{currentWord.definition}</h2>
            <input type={"submit"} value={"I don't know"} />
        </div>
        <div className={"flex justify-between gap-5 text-xl text-main"}>
            <input name={"wordInput"} type={"text"} placeholder={"Enter a Word"} autoComplete={"off"} className={`min-w-[500px] w-full outline-0 focus:outline-none border-0 focus:border-none bg-opacity-40 rounded-xl h-[40px] p-4 placeholder-second ${perfect ? "background-gradient" :  "bg-lightBackground"} ${visible ? correct ? "bg-green-500" : "bg-red-500" : "bg-lightBackground"}`} />
            <input type={"submit"} value={"Check"} />
        </div>
        <div className={`${visible ? "visible" : "hidden"} ${correct ? "text-green-500" : "text-red-500"}`}>
            {currentWord.word}
        </div>
        
    </form>
}

export default WriteInput