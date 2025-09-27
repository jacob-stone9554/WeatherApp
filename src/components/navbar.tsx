import Units from "./Units.tsx";
function Navbar () {
    return(
        <>
            <nav className="bg-neutral-900 text-white h-30 w-full flex flex-row items-center justify-between px-28">
                <img src="/images/logo.svg" alt="logo" />
                <Units/>
            </nav>
        </>
    );
}

export default Navbar;