import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";
import Input from "../../ui/dashboard/Input";
import {redirect} from "next/navigation";

export default async function Notes() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: {user},
    } = await supabase.auth.getUser();
    const {data: accounts, error} = await supabase.from("accounts").select("*").eq("id", user?.id);

    if (error) {
        return <div>Error fetching accounts: {error.message}</div>;
    }

    return user ? (
        <div className={"w-full h-full grid place-items-center"}>
            {accounts.map((note: any, index: number) => (
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
