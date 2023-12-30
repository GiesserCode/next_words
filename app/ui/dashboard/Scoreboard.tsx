'use server'
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {ProfileIconSVG} from "@/components/SVGs";
import {getScoreboardData, getUser} from "@/app/ui/actions";

const Scoreboard = async () => {
    const user = await getUser()
    const accounts = await getScoreboardData()
    return <div className={"w-[40%] px-10"}>
        <div className={"w-full bg-transBackground bg-opacity-40 rounded-2xl px-5 py-2"}>
            <div className={"w-full h-full"}>
                <h3 className={"text-2xl mb-2"}>Ranking</h3>
                <div className={"w-full h-full"}>
                    {accounts!.map((item: any, index: number) => {
                        return (index < 3 || item.id === user?.id) && (
                            <div key={index}>
                                <div className={`w-full h-[1px] bg-second mb-2 ${item.id === user?.id ? "visible" : "hidden"}`}></div>
                                <div
                                    className={`flex bg-lightBackground rounded-xl ${item.id === user?.id ? "bg-opacity-80" : "bg-opacity-40"} h-10 items-center py-[5px] px-2 text-xl justify-between text-main mb-2`}>
                                    <div className={"flex gap-2"}>
                                        <p className={"w-[40px] flex items-center justify-start -tracking-widest"}># {index + 1}</p>
                                        <div className={item.id === user?.id ? "hidden" : "visible"}><ProfileIconSVG/></div>
                                        <p>{item.name}</p>
                                    </div>
                                    <p>{item.score}</p>
                                </div>
                            </div>
                        );
                    })}</div>
            </div>
        </div>
    </div>
}

export default Scoreboard