import Plus from "@/app/ui/dashboard/Plus";
import {Suspense} from "react";
import {InfoSkeleton, ScoreboardSkeleton, WordsetsSkeleton} from "@/app/ui/skeletons";
import Info from "@/app/ui/dashboard/Info";
import Wordsets from "@/app/ui/dashboard/Wordsets";
import Scoreboard from "@/app/ui/dashboard/Scoreboard";

const Dashboard = () => {
    return <div className={"py-3 relative w-[calc(100vw - 250px)]"}>
        <h1 className={"pl-10 text-5xl mb-5"}>Dashboard</h1>
        <Suspense fallback={<InfoSkeleton />}>
            <Info/>
        </Suspense>
        <div className={"w-full flex justify-between pr-5"}>
            <h2 className={"pl-10 text-4xl mb-5"}>Recent learned</h2>
            <Plus />
        </div>
        <Suspense fallback={<WordsetsSkeleton />}>
            <Wordsets/>
        </Suspense>
        <h2 className={"pl-10 text-4xl mb-5"}>Stats</h2>
        <div className={"flex w-full"}>

            <Suspense fallback={<ScoreboardSkeleton />}>
                <Scoreboard/>
            </Suspense>
        </div>
    </div>
}

export default Dashboard