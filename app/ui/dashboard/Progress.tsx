"use server"

import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import { Line } from 'react-chartjs-2';

const Progress = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: {user},
    } = await supabase.auth.getUser();
    const {data: accounts, error} = await supabase.from("accounts").select("progress").eq("id", user?.id);
    const scale = (accounts![0].progress[4] - accounts![0].progress[0]) / 5

    return <div className={"w-[55%] px-10"}>
        <div className={"w-full bg-transBackground bg-opacity-40 rounded-2xl px-5 py-2"}>
            <div className={"w-full h-full"}>
                <h3 className={"text-2xl mb-2"}>Progress</h3>
                <div className={"w-full h-full bg-lightBackground bg-opacity-40 p-2 rounded-xl"}>
                    </div>
            </div>
        </div>
    </div>
}

export default Progress