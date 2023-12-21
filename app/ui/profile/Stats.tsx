import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";

const Stats = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: {user},
    } = await supabase.auth.getUser();
    const {data: accounts, error} = await supabase

        .from('accounts')

        .select('*')

        .order('score', {ascending: false});
    return <div className={"w-min"}>
        {accounts?.map((item, index) => {
            if (item.id === user?.id) {
                return (
                    <div key={index} className={"text-3xl text-main"}>
                        <div
                            className={"w-full min-w-[200px] h-[55px] bg-transBackground bg-opacity-40 rounded-xl grid place-items-center mb-[10px]"}>
                            {item!.score}
                        </div>
                        <div
                            className={"w-full min-w-[200px] h-[55px] bg-transBackground bg-opacity-40 rounded-xl grid place-items-center"}>
                            #{index + 1}
                        </div>
                    </div>
                )
            }
        })}
    </div>
}

export default Stats