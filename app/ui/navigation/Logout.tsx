"use server"
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";

const LogOut = () => {

    const signOut = async () => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        await supabase.auth.signOut();
        //return redirect("/login");
    };
    return <form action={signOut}>
        <button className={"buttons mr-[10px] border-hover"}>Sign Out</button>
    </form>
}

export default LogOut