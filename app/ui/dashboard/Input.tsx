import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";

export default function Notes(props: any) {
    const {user} = props
    const handleSubmit = async (formData: FormData) => {
        "use server";
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        const title = formData.get("note") as string;
        const {data, error} = await supabase

            .from("accounts")

            .update({name: title})

            .eq("id", user?.id);
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    };

    return (
        <form action={handleSubmit}>
            <label htmlFor="title">Your name</label>
            <input type="text" id="title" name="note"/>
            <button type="submit">change</button>
        </form>
    );
}
