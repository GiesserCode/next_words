import {createClient} from "@/utils/supabase/server";
import Link from "next/link";
import {cookies} from "next/headers";
import "./AuthButton.css";

export default async function AuthButton(props: any) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: {user},
    } = await supabase.auth.getUser();

    const signOut = async () => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        await supabase.auth.signOut();
        //return redirect("/login");
    };

    return user ? (<div className={"nav"}>
            <form action={signOut}>
                <button className={"buttons mr-[10px] border-hover"}>Sign Out</button>
            </form>
            <Link href="/notes" className="buttons w-[200px] mr-[30px] background-gradient">
                Go to your Words
            </Link>
        </div>

    ) : (
        <div className={"nav"}>
            <Link href="/signup" className="buttons mr-[10px] border-hover">
                Sign up
            </Link>
            <Link href="/login" className="buttons mr-[30px] background-gradient">
                Login
            </Link>
        </div>)
}
