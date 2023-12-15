import {CreateSVG, DashboardSVG, LearnSVG, ProfileSVG} from "@/components/SVGs";

export const buttons = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: <DashboardSVG/>
    },
    {
        name: "Profile",
        link: "/profile",
        icon: <ProfileSVG/>
    },
    {
        name: "Create",
        link: "/create",
        icon: <CreateSVG/>
    },
    {
        name: "Learn",
        link: "/learn",
        icon: <LearnSVG/>
    }
]