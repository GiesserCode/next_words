const Words = ({currentWordset}: any) => {
    return <div className={"w-full text-center text-2xl text-second mb-5"}>
        {currentWordset[0].numberOfWords} Words
    </div>
}

export default Words