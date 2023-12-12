export const Background = () => {
    return <div className={"overflow-hidden w-full h-full absolute top-0 left-0"}>
        <div className={"backgroundBlur rotate-[50deg] w-40 h-80 bg-ggreen top-1/2 left-40"}></div>
        <div className={"backgroundBlur -rotate-[20deg] w-40 h-80 bg-gblue top-3/4 left-10"}></div>
        <div className={"backgroundBlur w-64 h-80 bg-gblue top-1/4 left-4"}></div>
        <div
            className={"backgroundBlur rotate-[20deg] w-40 h-80 bg-ggreen top-0 left-24"}></div>


        <div
            className={"backgroundBlur rotate-[10deg] w-40 h-80 bg-gblue top-1/2 right-10"}></div>
        <div
            className={"backgroundBlur rotate-[20deg] w-40 h-80 bg-ggreen top-0 right-64"}></div>
        <div className={"backgroundBlur w-64 h-80 bg-gblue top-20 right-4"}></div>
        <div className={"backgroundBlur w-64 h-40 bg-ggreen bottom-0 right-40 rotate-45"}></div>
    </div>
}