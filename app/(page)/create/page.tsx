import CreateInput from "@/app/ui/create/CreateInput";
import {getWordsetbyId} from "@/app/ui/actions";

const Create = async ({searchParams,}: { searchParams?: { query?: string; }; }) => {
    const query = searchParams?.query || false;
    const wordsetData = await getWordsetbyId(query)

    return <section className={"w-full min-h-screen p-10"}>
        {query ? <CreateInput query={query} dataWords={wordsetData![0].words} title={wordsetData![0].title} des={wordsetData![0].description} /> : <CreateInput />}
    </section>
}

export default Create