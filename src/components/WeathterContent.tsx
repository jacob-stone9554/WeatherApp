
function WeatherContent() {
    return(
        <>
            <div className="flex flex-row items-center justify-around bg-neutral-900 w-full text-white h-screen">

                    <div className="flex flex-col w-full">
                        <div title="main card" className="flex flex-row items-center justify-between bg-blue-600 w-full h-50">
                            <p>Main Content</p>
                        </div>
                        <div title="details row">
                            Details Row
                        </div>
                        <div title="daily forecast">
                            <p>Daily Forecasts</p>
                        </div>
                    </div>
                <div className="flex flex-col w-full">
                    <p>Right sidebar</p>
                </div>
            </div>
        </>
    );
}

export default WeatherContent;