import {PenSVG, ProfileIconSVG} from "@/components/SVGs";

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
export const InfoSkeleton = () => {
    const cards = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={`w-[300px] h-[120px] bg-opacity-40 bg-transBackground rounded-3xl flex flex-col items-center mb-5 ${shimmer} relative overflow-hidden`}>
            <div className={"h-[44px] flex items-center"}>
                <p className={"text-xl text-second h-full grid place-items-center w-[200px]"}>
                    <span className={"w-[80px] h-[20px] bg-lightBackground bg-opacity-40 rounded-xl"}></span>
                </p>
            </div>
            <div className={"w-[260px] h-[60px] rounded-xl grid place-items-center bg-lightBackground bg-opacity-40 text-main text-3xl"}>
                <span className={"w-[140px] h-[20px] bg-lightBackground bg-opacity-40 rounded-xl"}></span>
            </div>
        </div>
    ));
    return <div className={`w-full flex justify-between px-10 mb-3 flex-wrap`}>
        {cards}
    </div>
}

export const WordsetsSkeleton = () => {
    const renderCards = () => {
        return Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={`h-[120px] bg-transBackground bg-opacity-40 rounded-2xl p-[10px] mr-5 ${shimmer} relative overflow-hidden`}>
                <div className={"w-full h-full"}>
                    <div className={"h-[40px] mb-[10px] flex justify-between text-second text-lg"}>
                        <PenSVG />
                        <span className={"w-[140px] h-[20px] bg-lightBackground bg-opacity-40 rounded-xl"}></span>
                    </div>
                    <div
                        className={
                            "h-[50px] bg-lightBackground bg-opacity-40 py-2 px-4 rounded-xl text-main text-xl grid place-items-center tracking-wide"
                        }
                    >
                        <span className={"w-[140px] h-[20px] bg-lightBackground bg-opacity-40 rounded-xl"}></span>
                    </div>
                </div>
            </div>
        ));
    };

    return <div className={"w-full flex px-10 mb-8 cursor-pointer"}>{renderCards()}</div>;
};

export const ScoreboardSkeleton = () => {
    const renderAccountList = () => {
        return (
            <div>
                {Array.from({ length: 4 }, (_, iteration) => {
                    return (
                        <div key={iteration}>
                            <div className={`w-full h-[1px] bg-second mb-2 ${iteration === 3 ? "visible" : "hidden"}`}></div>
                            <div
                                className={`flex bg-lightBackground rounded-xl ${iteration === 3 ? "bg-opacity-80" : "bg-opacity-40"} h-10 items-center py-[5px] px-2 text-xl justify-between text-main mb-2`}
                            >
                                <div className={"flex gap-2"}>
                                    <p className={"w-[40px] flex items-center justify-start -tracking-widest"}># {iteration + 1}</p>
                                    <div className={iteration === 3 ? "hidden" : "visible"}><ProfileIconSVG /></div>
                                    <span className={"w-[140px] h-[20px] bg-lightBackground bg-opacity-40 rounded-xl"}></span>
                                </div>
                                <span className={"w-[140px] h-[20px] bg-lightBackground bg-opacity-40 rounded-xl"}></span>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={`w-[40%] px-10`}>
            <div className={`w-full bg-transBackground bg-opacity-40 rounded-2xl px-5 py-2 ${shimmer} relative overflow-hidden`}>
                <div className={"w-full h-full"}>
                    <h3 className={"text-2xl mb-2"}>Ranking</h3>
                    <div className={"w-full h-full"}>
                        {renderAccountList()}
                    </div>
                </div>
            </div>
        </div>
    );
};

