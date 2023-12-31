import {getUserData, getWordsetbyId, getWordsetsData} from "@/app/ui/actions";
import WriteInput from "@/app/ui/learn/learn/WriteInput";

const Learnlearn = async ({searchParams,}: { searchParams?: { query?: string; }; }) => {
    const accounts = await getUserData()
    const wordsets_user = await getWordsetsData(accounts)
    const query = searchParams?.query || false;
    const wordsetData = query ? await getWordsetbyId(query) : wordsets_user[0]
    const userWordset = accounts![0].wordsets_user.find((item: any) => item.id === wordsetData[0].id);

    return <section className={"w-full h-screen grid place-items-center"}>
        <WriteInput userWordset={userWordset.words} officialWordset={wordsetData[0].words} />
    </section>
}

export default Learnlearn