'use server'
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {z} from 'zod';
import {unstable_noStore as noStore} from 'next/cache';
import {redirect} from "next/navigation";
import * as puppeteer from 'puppeteer';

const cookieStore = cookies();
const supabase = createClient(cookieStore);

let User:any = initUser()

async function initUser(){
    const { data: { user } } = await supabase.auth.getUser();
    return user
}

export async function setUser(newUser: any) {
    newUser ? User = newUser : User = null
}

export async function getUser(){
    return User
}

export async function getUserData() {
    noStore()
    const user = await getUser()
    const {data: accounts, error} = await supabase.from("accounts").select("*").eq("id", user?.id);
    if (accounts){
        return accounts
    } else {
        redirect("/login")
    }
}

export const generateUUID = () => {
    const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return pattern.replace(/[xy]/g, function(c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

export async function getScoreboardData() {
    const user = await getUser()
    const {data: accounts, error} = await supabase

        .from('accounts')

        .select('*')

        .order('score', {ascending: false});
    return accounts
}

export async function getWordsetsData(accounts: any){
    noStore()
    const wordsdata = await Promise.all(
        accounts![0].wordsets_user.map(async (item: any) => {
            const {data: wordsets, error} = await supabase
                .from("wordsets")
                .select("*")
                .eq("id", item.id);
            return wordsets;
        })
    );
    return wordsdata
}

export async function SignOut(){
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
}

const noteFormSchema = z.object({note: z.string()})

export async function handleSubmit(formData: FormData) {

    const validatedFields = noteFormSchema.safeParse(
        {note: formData.get('note')}
    )

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    const {note} = validatedFields.data

    const user = await getUser();

    if (note !== "") {
        const {data, error} = await supabase
            .from("accounts")
            .update({name: note})
            .eq("id", user?.id);
        if (error) {
            console.error(error);
            return null;
        }
    }
}

export async function fetchFilteredWordsets(query: any, accounts: any) {
    try {
        const wordsdata = await Promise.all(
            accounts![0].wordsets_user.map(async (item: any) => {
                    const {data: wordsets, error} = await supabase
                    .from("wordsets")
                    .select("*")
                    .eq("id", item.id)
                    .ilike('title', `%${query}%`)
                    return wordsets;})
        );
        return wordsdata
    } catch (error) {
        console.error('Supabase Error:', error);
        throw new Error('Failed to fetch wordsets.');
    }
}

const wordsetFormSchema = z.object({wordsetId: z.string()})


export async function addNewUserWordset(formData: FormData) {
    const validatedFields = wordsetFormSchema.safeParse({
        wordsetId: formData.get('wordsetId')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Wordset.',
        };
    }

    const { wordsetId }: any = validatedFields.data;

    const user = await getUser()

    if (wordsetId !== "") {
        const accounts: any = await getUserData()
        const currentWordsets = accounts[0].wordsets_user
        if (!currentWordsets.some((word: any) => word.id === wordsetId)){

        //get Wordset you want to add
        const { data, error: wordsetError } = await supabase
            .from("wordsets")
            .select("*")
            .eq("id", wordsetId);

        //create your vars for every word
        const wordsOfWordset = data![0].words.map((item: any) => {
            return {id: item.id,
            done: false,
            star: false,
            wrong: 0
            }
        })

        //finish the new wordset
        const newUserWordset: any = [{id: wordsetId, words: wordsOfWordset}]

        //merge the new and old wordsets
        const finalWordsets = [...currentWordsets, ...newUserWordset];

        const {data: newWordset,  error: updateError} = await supabase
            .from("accounts")
            .update({wordsets_user: finalWordsets})
            .eq("id", user?.id)

        if (wordsetError) {
            console.error(wordsetError);
            return null;
        }
        if (updateError) {
            console.error(updateError);
            return null;
        }
        }else{
            console.error("This Wordset is already existing")
        }
    }
}

export async function deleteUserWordset(formData: FormData){
    const validatedFields = wordsetFormSchema.safeParse({
        wordsetId: formData.get('wordsetId')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Wordset.',
        };
    }

    const { wordsetId }: any = validatedFields.data;

    const accounts = await getUserData()
    const currentWordsets = accounts![0].wordsets_user
    const user = await getUser()


    const newWordsets = currentWordsets.filter((wordset: any) => wordset.id !== wordsetId)
    const {data: wordsets,  error} = await supabase
        .from("accounts")
        .update({wordsets_user: newWordsets})
        .eq("id", user?.id)
}

const createWordsetFormSchema = z.object({title: z.string(), des: z.string()})


export async function createNewLearningSet(formData: FormData, words: any, query: any){
    const validatedFields = createWordsetFormSchema.safeParse({
        title: formData.get('title'),
        des: formData.get('des')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Wordset.',
        };
    }

    const { title, des }: any = validatedFields.data;

    const accounts = await getUserData()

    const id = query ? query : generateUUID()
    const newWordsnoId = words.filter((item: any) => item.word !== "" || item.definition !== "");
    const wordsWithIds = newWordsnoId.map((item: any) => ({
        id: generateUUID(), // Assuming you have a function like generateUUID() to create unique IDs
        ...item, // Spread the existing properties of the object
    }));
    const numberOfWords = wordsWithIds.length
    const creator = accounts![0].name
    const editId = [accounts![0].id]
    console.log("id: " + id)
    console.log("title: " + title)
    console.log("description: " + des)
    console.log("words: " + JSON.stringify(wordsWithIds))
    console.log("number of words: " + numberOfWords)
    console.log("creator: " + creator)
    console.log("editId: " + editId)

    const user = await getUser()

    const {data: wordsets, error} = await supabase
        .from("wordsets")
        .select("id")
        .eq("id", id)

    console.log(wordsets)

    if (wordsets![0]){
        console.log("update")
        const {data: wordsets, error} = await supabase
            .from("wordsets")
            .update({title, description: des, words: wordsWithIds, numberOfWords, creator, editId})
            .eq("id", id)
        console.log(wordsets)
        if (error){
            console.error(error)
        }
    } else{
        console.log("create")
        const {data: wordsets, error} = await supabase
            .from("wordsets")
            .insert({id, title, description: des, words: wordsWithIds, numberOfWords, creator, editId})
        if (error){
            console.error(error)
        }

        const currentWordsets = accounts![0].wordsets_user

        const { data, error: wordsetError } = await supabase
            .from("wordsets")
            .select("*")
            .eq("id", id);

        //create your vars for every word
        const wordsOfWordset = data![0].words.map((item: any) => {
            return {id: item.id,
                done: false,
                star: false,
                wrong: 0
            }
        })

        //finish the new wordset
        const newUserWordset: any = [{id: id, words: wordsOfWordset}]

        //merge the new and old wordsets
        const finalWordsets = [...currentWordsets, ...newUserWordset];

        const {data: newWordset,  error: updateError} = await supabase
            .from("accounts")
            .update({wordsets_user: finalWordsets})
            .eq("id", user?.id)

        if (wordsetError) {
            console.error(wordsetError);
            return null;
        }
        if (updateError) {
            console.error(updateError);
            return null;
        }
    }

    redirect(`/learn?query=${id}`)
}

export async function getWordsetbyId(id: any){
    noStore()
    if (id){
        const {data: wordsets, error} = await supabase
            .from("wordsets")
            .select("*")
            .eq("id", id)
        return wordsets
    }
}

export async function setStar(wordset: any, wordId: any){
    const updatedData = wordset.map((group: any) => ({
        ...group,
        words: group.words.map((word: any) => ({
            ...word,
            star: word.id === wordId ? !word.star : word.star
        }))
    }));

    const user = await getUser()

    const {data: accounts, error} = await supabase
        .from("accounts")
        .update({wordsets_user: updatedData})
        .eq("id", user.id)
}

export async function checkWordsOfUserUpToDate(){
    const accounts = await getUserData()
    if (accounts) {
        const wordsets = accounts![0].wordsets_user
        const newUserWordsets = await Promise.all(wordsets.map(async (wordset: any) => {
            const madeWordset = await getWordsetbyId(wordset.id);

            const addedItems = madeWordset![0].words.filter((officialItem: any) => !wordset.words.some((userItem: any) => userItem.id === officialItem.id));
            const deletedItems = wordset.words.filter((userItem: any) => !madeWordset![0].words.some((officialItem: any) => officialItem.id === userItem.id));

            // Create a new array by combining the existing words with added items
            const updatedWords = [...wordset.words, ...addedItems];

            // Remove deleted items from the updatedWords array
            const newWorsetDeletedwords = updatedWords.filter((userItem: any) => !deletedItems.some((deletedItem: any) => deletedItem.id === userItem.id));

            // Transform the word objects to the desired format
            const transformedWords = newWorsetDeletedwords.map((word: any) => ({
                id: word.id,
                done: false,
                star: false,
                wrong: 0,
            }));

            return { id: wordset.id, words: transformedWords };
        }));


        const {data: account, error} = await supabase
                .from("accounts")
                .update({wordsets_user: newUserWordsets})
                .eq("id", accounts![0].id)
            if (error){
                console.error(error)
            }

    }
}

export async  function getQuizlet(quizlet: string){
    /*console.log("test")

    const res = await fetch(quizlet)
    const html = await res.text()

    const dom = new JSDOM(html)
    const document = dom.window.document
    const french = document.querySelector('body')?.textContent
    console.log(french)*/
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(true);

    await page.goto(quizlet, { waitUntil: 'domcontentloaded' });

    // Add some delay if the content is loaded asynchronously
    await page.waitForTimeout(2000);

    const frenchContent = await page.evaluate(() => {
        // Your logic to extract content goes here
        return document.querySelector('body')?.textContent;
    });

    console.log(frenchContent);

    await browser.close();
}