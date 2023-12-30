'use server'

import {fetchFilteredWordsets, getUserData} from "@/app/ui/actions";
import DeleteIcon from "@/app/ui/profile/DeleteIcon";
import Link from "next/link";

const LearningSets = async ({query}: any) => {
    const accounts = await getUserData()
    const wordsdata = await fetchFilteredWordsets(query, accounts)

    return <div className={"w-full p-5 bg-transBackground bg-opacity-40 rounded-2xl text-2xl text-main"}>
        <div className={"w-full flex mb-5 p-3"}>
            <h3 className={"w-[50%]"}>Learning set</h3>
            <h3 className={"w-[35%]"}>Creator</h3>
            <h3 className={"w-[15%]"}>Words</h3>
        </div>
        <div className={"w-full flex flex-col gap-5"}>
            {wordsdata.map((item: any, index: any) => {
                const edit = item[0] && item[0].editId.includes(accounts![0].id)
                return item[0] && <div key={index}
                     className="w-full bg-lightBackground bg-opacity-40 rounded-xl text-xl p-3 flex items-center relative">
                    <Link href={`/learn?query=${item[0].id}`} className="w-[50%]">{item[0].title}</Link>
                    <p className="w-[35%]">{item[0].creator}</p>
                    <p className="w-[15%]">{item[0].numberOfWords}</p>
                    <DeleteIcon wordsetId={item[0].id} accountId={edit} />
                </div>
            })}
        </div>
    </div>
}

export default LearningSets