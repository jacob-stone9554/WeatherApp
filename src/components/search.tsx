
function Search() {
    return(
        <>
            <div className="bg-neutral-900 w-full h-75 flex flex-col items-center justify-around">
                <div className="text-preset-2 text-white">
                    <p>How's the sky looking today?</p>
                </div>
                <div className="flex flex-row items-center justify-center w-full">
                    <div className="flex flex-col items-start justify-center text-neutral-300 bg-neutral-800 h-12 w-105" >
                        <p className="ml-5">Search for a place!</p>
                    </div>
                    <p className="text-neutral-300 ml-10 bg-blue-500 h-12 w-20"> Button!</p>
                </div>
            </div>
        </>
    );
}

export default Search;