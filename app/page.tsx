import AuthButton from "@/components/AuthButton";

export default async function Index() {
    return (<section className={"section"}>
            <AuthButton/>
            <section className={"below center"}>
                <div>
                    <div className={"center"}>
                        <p className={"learning background-gradient center"}>Learning</p>
                    </div>
                    <h1 className={"words"}>Words</h1>
                    <p className={"des"}>Learn your dictionary in an easy way</p>
                </div>
            </section>
        </section>
    )
}
