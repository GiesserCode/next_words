import {CreateSVG, DashboardSVG, LearnSVG, ProfileSVG} from "@/components/SVGs";

export const buttons = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: <DashboardSVG color={"#AAAAAA"}/>,
        lightIcon: <DashboardSVG color={"#FFFFFF"} />
    },
    {
        name: "Profile",
        link: "/profile",
        icon: <ProfileSVG color={"#AAAAAA"}/>,
        lightIcon: <ProfileSVG color={"#FFFFFF"} />
    },
    {
        name: "Create",
        link: "/create",
        icon: <CreateSVG color={"#AAAAAA"}/>,
        lightIcon: <CreateSVG color={"#FFFFFF"} />
    },
    {
        name: "Learn",
        link: "/learn",
        icon: <LearnSVG color={"#AAAAAA"}/>,
        lightIcon: <LearnSVG color={"#FFFFFF"} />
    }
]