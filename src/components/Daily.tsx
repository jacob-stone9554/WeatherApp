
type DailyProps = { className?: string}

function Daily ({ className = "" }: DailyProps) {
    return (
        <>
            <div className={`bg-neutral-800 h-60 mt-5 w-45 ${className}`}>
                <p>Daily Forecast</p>
            </div>
        </>
    );
}

export default Daily;