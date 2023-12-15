import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {PenSVG} from "@/components/SVGs";

const Wordsets = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: {user},
    } = await supabase.auth.getUser();
    const {data: accounts, error} = await supabase
        .from("accounts")
        .select("wordsets_user")
        .eq("id", user?.id);

    const wordsdata = await Promise.all(
        accounts![0].wordsets_user.map(async (item: any) => {
            const {data: wordsets, error} = await supabase
                .from("wordsets")
                .select("*")
                .eq("id", item.id);
            return wordsets;
        })
    );

    return <div className={"w-full flex px-10 mb-8"}>
        {wordsdata.map((item, index) => (
            <div key={index} className={"h-[120px] bg-transBackground bg-opacity-40 rounded-2xl p-[10px] mr-5"}>
                <div className={"w-full h-full"}>
                    <div className={"h-[40px] mb-[10px] flex justify-between text-second text-lg"}>
                        <PenSVG/>
                        <p>{item[0].numberOfWords} Words</p>
                    </div>
                    <div
                        className={"h-[50px] bg-lightBackground bg-opacity-40 py-2 px-4 rounded-xl text-main text-xl grid place-items-center tracking-wide"}>
                        {item[0].title}
                    </div>
                </div>
            </div>

        ))}
    </div>
}

export default Wordsets