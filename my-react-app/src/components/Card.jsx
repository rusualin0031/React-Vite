function Card({title, imgURL, isVisiteted, children}) {

    return (
        <div className="rounded-md bg-zinc-950">
            <img src={imgURL} alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-3xl text-white">{title}</h2>
                <p className="text-gray-500">
                    {children}
                </p>
                {isVisiteted ? <span>✅ visitata</span> : <span>❌ non visitata</span>}   
            </div>
        </div>
    );
}

export default Card;