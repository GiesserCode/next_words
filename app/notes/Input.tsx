import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default function Notes() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const title = formData.get("note") as string;
    const { data, error } = await supabase.from("notes").insert([{ title }]);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <form action={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="note" />
      <button type="submit">Add Note</button>
    </form>
  );
}
