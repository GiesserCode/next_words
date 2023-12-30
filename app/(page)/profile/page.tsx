'use server'
import Stats from "@/app/ui/profile/Stats";
import Search from "@/app/ui/profile/Search";
import UserWrapper from "@/app/ui/profile/User.server";
import LearningSets from "@/app/ui/profile/LearningSets";

const Profile = ({
                     searchParams,
                 }: {
    searchParams?: {
        query?: string;
    };
}) => {
    const query = searchParams?.query || '';
    return <div className={"p-10 w-[calc(100vw - 250px)] relative"}>
        <div className={"w-full flex justify-between mb-10"}>
            <UserWrapper />
            <Stats/>
        </div>
        <Search query={query} />
        <LearningSets query={query} />
    </div>
}

export default Profile