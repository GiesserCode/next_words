'use server'
import {getUser, getUserData} from "@/app/ui/actions";

const Stats = async () => {
    const user = await getUser()
    const accounts = await getUserData()
    return <div className={"w-min"}>
        {accounts?.map((item, index) => {
            if (item.id === user?.id) {
                return (
                    <div key={index} className={"text-3xl text-main"}>
                        <div
                            className={"w-full min-w-[200px] h-[55px] bg-transBackground bg-opacity-40 rounded-xl grid place-items-center mb-[10px]"}>
                            {item!.score}
                        </div>
                        <div
                            className={"w-full min-w-[200px] h-[55px] bg-transBackground bg-opacity-40 rounded-xl grid place-items-center"}>
                            #{index + 1}
                        </div>
                    </div>
                )
            }
        })}
    </div>
}

export default Stats