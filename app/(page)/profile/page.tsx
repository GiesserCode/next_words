import User from "@/app/ui/profile/User"
import Stats from "@/app/ui/profile/Stats";

const Profile = () => {
    return <div className={"p-10 w-[calc(100vw - 250px)]"}>
        <div className={"w-full flex justify-between"}>
            <User/>
            <Stats/>
        </div>
    </div>
}

export default Profile