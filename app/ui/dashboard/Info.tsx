"use server"
import {DayStreakSVG, LearnsetsSVG, MadeSVG} from "@/components/SVGs";
import {getUserData} from "@/app/ui/actions";
import {isBefore, parseISO} from "date-fns";

const Info = async () => {
    const accounts = await getUserData()
    const savedDates = accounts![0].day_streak
    const today: any = new Date();
    const lastOnline = parseISO(savedDates[1]);
    let dayStreak
    if (isBefore(lastOnline, today)) {
        savedDates[1] = today.toISOString();

        const streakStartDate: any = parseISO(savedDates[0]);
        dayStreak = Math.floor((today - streakStartDate) / (24 * 60 * 60 * 1000));
    }
    return <div className={"w-full flex justify-between px-10 mb-3 flex-wrap"}>
        <div className={"w-[300px] bg-opacity-40 bg-transBackground rounded-3xl flex flex-col items-center mb-5"}>
            <div className={"h-[44px] flex items-center"}>
                <MadeSVG/>
                <p className={"text-xl text-second h-full grid place-items-center w-[200px]"}>
                    Total learned words
                </p>
                <div className={"w-[24px] h-[24px]"}></div>
            </div>
            <div
                className={"w-[260px] h-[60px] rounded-xl grid place-items-center bg-lightBackground bg-opacity-40 text-main text-3xl"}>
                {accounts![0].score}
            </div>
        </div>
        <div
            className={"w-[300px] h-[120px] bg-opacity-40 bg-transBackground rounded-3xl flex flex-col items-center mb-5"}>
            <div className={"h-[44px] flex items-center"}>
                <DayStreakSVG/>
                <p className={"text-xl text-second h-full grid place-items-center w-[200px]"}>
                    Day Streak
                </p>
                <div className={"w-[24px] h-[24px]"}></div>
            </div>
            <div
                className={"w-[260px] h-[60px] rounded-xl grid place-items-center bg-lightBackground bg-opacity-40 text-main text-3xl"}>
                {dayStreak}
            </div>
        </div>
        <div
            className={"w-[300px] h-[120px] bg-opacity-40 bg-transBackground rounded-3xl flex flex-col items-center mb-5"}>
            <div className={"h-[44px] flex items-center"}>
                <LearnsetsSVG/>
                <p className={"text-xl text-second h-full grid place-items-center  w-[200px]"}>
                    Wordsets
                </p>
                <div className={"w-[24px] h-[24px]"}></div>
            </div>
            <div
                className={"w-[260px] h-[60px] rounded-xl grid place-items-center bg-lightBackground bg-opacity-40 text-main text-3xl"}>
                {accounts![0].wordsets_user.length}
            </div>
        </div>
    </div>
}

export default Info