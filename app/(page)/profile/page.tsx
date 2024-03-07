'use server'
import Search from "@/app/ui/profile/Search";
import LearningSets from "@/app/ui/profile/LearningSets";
import {Suspense} from "react";
import UserWrapper from "@/app/ui/profile/User.server";
import Stats from "@/app/ui/profile/Stats";
import {InfoProfile, ProfileLearning, Searchbar} from "@/app/ui/skeletons";

const Profile = ({
                     searchParams,
                 }: {
    searchParams?: {
        query?: string;
    };
}) => {
    const query = searchParams?.query || '';
    return <div className={"p-10 w-[calc(100vw - 250px)] relative"}>
        <Suspense fallback={<InfoProfile/>}>
            <div className={"w-full flex justify-between mb-10"}>
                <UserWrapper />
                <Stats/>
            </div>
        </Suspense>
        <Suspense fallback={<Searchbar/>}>
            <Search query={query} />
        </Suspense>
        <Suspense fallback={<ProfileLearning/>}>
            <LearningSets query={query} />
        </Suspense>
    </div>
}

export default Profile