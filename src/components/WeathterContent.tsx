import Details from "./Details.tsx";
import Daily from "./Daily.tsx";
import Hourly from "./Hourly.tsx";
import Current from "./Current.tsx";

function WeatherContent() {
    return(
        <>
            <div className="flex flex-row items-start bg-neutral-900 w-full text-white px-28">
                <div className="flex flex-col flex-[2] mr-6 space-y-6">
                    <Current />
                    <div title="details row" className="grid grid-cols-4 gap-4">
                        <Details />
                        <Details />
                        <Details />
                        <Details />
                    </div>
                    <div title="daily forecast" className="grid grid-cols-7 gap-10">
                        <Daily />
                        <Daily />
                        <Daily />
                        <Daily />
                        <Daily />
                        <Daily />
                        <Daily />
                    </div>
                </div>
                <div className="flex flex-col flex-[1] items-end pl-5">
                    <Hourly />
                </div>
            </div>
        </>
    );
}

export default WeatherContent;