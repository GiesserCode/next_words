import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export const {
  data: { user },
} = await supabase.auth.getUser();

export const signOut = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
  return redirect("/login");
};
