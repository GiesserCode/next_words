'use server'

import {getUserData, getWordsetbyId, getWordsetsData} from "@/app/ui/actions";
import Select from "@/app/ui/learn/Select";
import LearningButtons from "@/app/ui/learn/LearningButtons";
import Words from "@/app/ui/learn/Words";
import WordsList from "@/app/ui/learn/WordsList";

const Learn = async ({searchParams,}: { searchParams?: { query?: string; }; }) => {
    const accounts = await getUserData()
    const wordsets_user = await getWordsetsData(accounts)
    const query = searchParams?.query || false;
    const wordsetData = query ? await getWordsetbyId(query) : wordsets_user[0]

    return <section className={"w-full min-h-screen p-10"}>
        <Select wordsets_user={wordsets_user} currentWordset={wordsetData} />
        <LearningButtons wordsetId={wordsetData[0].id} />
        <Words currentWordset={wordsetData} />
        <WordsList currentWordset={wordsetData} currentUserWordset={accounts![0].wordsets_user} />
    </section>
}

export default Learn