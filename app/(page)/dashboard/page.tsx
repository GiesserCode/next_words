import Info from "@/app/ui/dashboard/Info";
import Wordsets from "@/app/ui/dashboard/Wordsets";
import {PlusSVG} from "@/components/SVGs";
import Scoreboard from "@/app/ui/dashboard/Scoreboard";
import Progress from "@/app/ui/dashboard/Progress";

const Dashboard = () => {
    return <div className={"py-3 w-[calc(100vw - 250px)]"}>
        <h1 className={"pl-10 text-5xl mb-5"}>Dashboard</h1>
        <Info/>
        <div className={"w-full flex justify-between pr-5"}>
            <h2 className={"pl-10 text-4xl mb-5"}>Recent learned</h2>
            <div className={"mt-2"}><PlusSVG/></div>
        </div>
        <Wordsets/>
        <h2 className={"pl-10 text-4xl mb-5"}>Stats</h2>
        <div className={"flex w-full"}>
            <Scoreboard/>
            <Progress />
        </div>
    </div>
}

export default Dashboard