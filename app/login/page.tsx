import Link from "next/link";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import "@/components/login.css"
import {setUser} from "@/app/ui/actions";

export default async function Login({
                                  searchParams,
                              }: {
    searchParams: { message: string };
}) {
    const signIn = async (formData: FormData) => {
        "use server";

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const {error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            //idk what to do
        }

        const { data: { user } } = await supabase.auth.getUser();
        await setUser(user)

        return redirect("/dashboard");
    };

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <Link
                href="/"
                className="focus:outline-none focus:bg-gblue absolute z-30 left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
                {" "}
                Back
            </Link>

            <div className={"w-screen h-screen grid place-items-center absolute top-0 left-0"}>
                <form
                    className="flex flex-col border rounded-xl py-4 px-8 border-second"
                    action={signIn}
                ><h1 className={"w-full text-center text-3xl mb-2"}>Login</h1>
                    <label className="text-sm text-second" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-sm text-second" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <button className="button background-gradient">
                        Sign In
                    </button>
                    <p
                        id="errorMessage"
                        className="mt-2 p-2 bg-foreground/10 text-foreground text-red-500"
                    >
                    </p>
                </form>

            </div>
        </div>
    );
}
