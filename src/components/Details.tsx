
type DetailsProps = { className?: string };
function Details ({ className = "" }: DetailsProps)  {
    return(
        <>
            <div className={`bg-neutral-800 h-40 mt-5 ${className}`}>
                <p>Details!</p>
            </div>
        </>
    );
}
export default Details;