import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {BigUserSVG, PenSVG} from "@/components/SVGs";

const User = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: {user},
    } = await supabase.auth.getUser();
    const {data: accounts, error} = await supabase.from("accounts").select("name").eq("id", user?.id);
    const handleSubmit = async (formData: FormData) => {
        "use server";
        const title = formData.get("note") as string;
        const {data, error} = await supabase

            .from("accounts")

            .update({name: title})

            .eq("id", user?.id);
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    };
    return <div className={"flex gap-5 text-main"}>
        <div className={"w-[120px] h-[120px] bg-transBackground bg-opacity-40 rounded-xl grid place-items-center"}>
            <BigUserSVG/>
        </div>
        <div className={"flex gap-2 items-center h-min"}>
            <form action={handleSubmit}>
                <input
                    type="text"
                    defaultValue={accounts![0].name}
                    className="bg-transparent text-2xl text-main border-0 outline-0 focus:outline-none focus:border-0"
                />
            </form>
            <PenSVG/>
        </div>
    </div>
}


export default User