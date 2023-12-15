"use server"
import Navigation from "../ui/navigation/Navigation"
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {defaultAccounts} from "@/app/ui/default";

export default async function DashboardLayout({
                                                  children, // will be a page or nested layout
                                              }: {
    children: React.ReactNode
}) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: {user},
    } = await supabase.auth.getUser();
    const {data: accounts, error} = await supabase.from("accounts").select(user?.id);
    if (error) {
        const id = user?.id
        const name = defaultAccounts.name
        const score = defaultAccounts.score
        const progress = defaultAccounts.progress
        const date = new Date()
        const day_streak = [date, date]
        const wordsets_user = defaultAccounts.wordsets_user
        const {data, error} = await supabase.from("accounts").insert([{id, name, score, progress, day_streak, wordsets_user}]);
    }

    return (
        <section className={"flex"}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Navigation/>

            <section className={"w-full h-full"}>{children}</section>
        </section>
    )
}