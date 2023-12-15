import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";

const Scoreboard = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: {user},
    } = await supabase.auth.getUser();
    const {data: accounts, error} = await supabase

        .from('accounts')

        .select('*')

        .order('score', {ascending: false});
    return <div className={"w-full px-10"}>
        <div className={"w-[40%] h-[260px] bg-transBackground bg-opacity-40 rounded-2xl px-5 py-2"}>
            <div className={"w-full h-full"}>
                <h3 className={"text-2xl mb-2"}>Ranking</h3>
                <div className={"w-full h-full"}>
                    {accounts!.map((item: any, index: number) => {
                        return (index < 3 || item.id === user?.id) && (
                            <div key={index}
                                 className={`flex bg-lightBackground rounded-xl bg-opacity-40 h-10 items-center`}>
                                <p>{index + 1}</p>
                                <p>{item.name}</p>
                                <p>{item.score}</p>
                            </div>
                        );
                    })}</div>
            </div>
        </div>
    </div>
}

export default Scoreboard