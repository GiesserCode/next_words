import {getUserData, getWordsetbyId, getWordsetsData} from "@/app/ui/actions";
import LearnInput from "@/app/ui/learn/learn/LearnInput";

const Learnlearn = async ({searchParams,}: { searchParams?: { query?: string; }; }) => {
    const accounts = await getUserData()
    const wordsets_user = await getWordsetsData(accounts)
    const query = searchParams?.query || false;
    const wordsetData = query ? await getWordsetbyId(query) : wordsets_user[0]
    const userWordset = accounts![0].wordsets_user.find((item: any) => item.id === wordsetData[0].id);

    return <section className={"w-full h-screen grid place-items-center"}>
        <LearnInput userWordset={userWordset} officialWordset={wordsetData} />
    </section>
}

export default Learnlearn