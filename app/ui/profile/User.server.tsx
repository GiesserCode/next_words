'use server'
import { getUserData } from "@/app/ui/actions";
import User from "./User";

export default async function UserWrapper() {
    const accounts = await getUserData();

    if (!accounts || accounts.length === 0) {
        console.error("No account data found");
        return null;
    }

    const name = accounts[0].name;

    return <User name={name} />;
}
