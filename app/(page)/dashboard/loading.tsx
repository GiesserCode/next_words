import {InfoSkeleton, ScoreboardSkeleton, WordsetsSkeleton} from "@/app/ui/skeletons";
import Plus from "@/app/ui/dashboard/Plus";

const Loading = () => {
    return <div className={"py-3 relative w-[calc(100vw - 250px)]"}>
        <h1 className={"pl-10 text-5xl mb-5"}>Dashboard</h1>
        <InfoSkeleton />
        <div className={"w-full flex justify-between pr-5"}>
            <h2 className={"pl-10 text-4xl mb-5"}>Recent learned</h2>
            <Plus />
        </div>
        <WordsetsSkeleton/>
        <h2 className={"pl-10 text-4xl mb-5"}>Stats</h2>
        <div className={"flex w-full"}>
            <ScoreboardSkeleton/>
        </div>
    </div>
}

export default Loading