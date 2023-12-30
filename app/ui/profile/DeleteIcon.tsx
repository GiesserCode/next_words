'use client'
import {PenSVG, TrashSVG} from "@/components/SVGs";
import {deleteUserWordset} from "@/app/ui/actions";
import Link from "next/link";

const DeleteIcon = ({wordsetId, accountId}: any) => {
    return <form className={"absolute right-2 cursor-pointer flex gap-2 items-center"} action={deleteUserWordset}>
        <Link className={accountId ? "visible" : "hidden"} href={`/create?query=${wordsetId}`}>
            <PenSVG/>
        </Link>
        <button name={"wordsetId"} value={wordsetId}>
            <TrashSVG/>
        </button>
    </form>
}

export default DeleteIcon