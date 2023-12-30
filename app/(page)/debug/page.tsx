import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";
import Input from "../../ui/dashboard/Input";
import {redirect} from "next/navigation";
import {getUser, getUserData} from "@/app/ui/actions";

export default async function Notes() {
    const user = await getUser()
    const accounts = await getUserData()

    return user ? (
        <div className={"w-full h-full grid place-items-center"}>
            {accounts!.map((note: any, index: number) => (
                <div
                    key={note}
                    className={
                        "w-[600px] bg-zinc-500 rounded-lg flex flex-col justify-evenly items-center"
                    }
                >
                    <div>USER ID: {note.id}</div>
                    <div>USER NAME: {note.name}</div>
                    <div>USER SCORE: {note.score}</div>
                    <div>USER PROGRESS: {note.progress}</div>
                    <div>USER DAYSTREAK: {note.day_streak}</div>
                    {note.wordsets_user.map((item: any, noteIndex: number) => (
                        <>
                            <div key={noteIndex}>WORDSET ID: {JSON.stringify(item.id)}</div>
                            {item.words.map((words: any, wordsIndex: number) => (
                                <div key={wordsIndex}>
                                    <div>WORD NUM:{wordsIndex}</div>
                                    <div>WORD TIMES WRONG:{JSON.stringify(words.wrong)}</div>
                                    <div>WORD DONE: {JSON.stringify(words.done)}</div>
                                    <div>STAR: {JSON.stringify(words.star)}</div>
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            ))}
            <Input user={user}/>
        </div>
    ) : redirect("/")
}
