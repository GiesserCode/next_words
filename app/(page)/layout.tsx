"use server"
import Navigation from "../ui/navigation/Navigation"
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {defaultAccounts} from "@/app/ui/default";
import {checkWordsOfUserUpToDate, getUserData} from "@/app/ui/actions";
import {isBefore, parseISO} from 'date-fns';

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
        const {data, error} = await supabase.from("accounts").insert([{
            id,
            name,
            score,
            progress,
            day_streak,
            wordsets_user
        }]);
    }
    await checkWordsOfUserUpToDate()
    const account = await getUserData()
    let savedDates = account![0].day_streak
    await updateDayStreak()

    async function updateDayStreak() {
        const lastOnline = parseISO(savedDates[1]);
        const today: any = new Date();

        if (isBefore(lastOnline, today)) {
            // Update last online to today
            savedDates[1] = today.toISOString();

            // Increment day streak
            const streakStartDate: any = parseISO(savedDates[0]);
            const dayStreak = Math.floor((today - streakStartDate) / (24 * 60 * 60 * 1000));
        } else {
            // Reset streak
            savedDates[0] = today.toISOString();
            savedDates[1] = today.toISOString();

            console.log("Day streak reset.");
        }
        const {
            data: accounts,
            error
        } = await supabase.from("accounts").update({day_streak: savedDates}).eq("id", user?.id)
    }

    return (
        <section className={"flex selection:bg-lightBackground"}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <div className={`w-[350px] bg-black relative`}>
                <Navigation/>
            </div>


            <section className={"w-full h-full"}>{children}</section>
        </section>
    )
}