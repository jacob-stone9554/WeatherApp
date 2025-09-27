import { useState, useRef, useEffect } from "react";
function Units () {
    const [open, setOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
       function handleOutsideClick(event: MouseEvent) {
           if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
               setOpen(false);
           }
       }

        document.addEventListener("mousedown", handleOutsideClick);

       return () => {
           document.removeEventListener("mousedown", handleOutsideClick);
       }
    }, []);


    return (
        <>
            <div ref={dropdownRef} className="relative inline-block">
                <button
                    className="bg-neutral-700 w-28 h-12 flex flex-row items-center justify-between px-4 rounded-lg"
                    onClick={() => setOpen(!open)}
                >
                    <img src="/images/icon-units.svg" alt="units" />
                    <p>Units</p>
                    <img src="/images/icon-dropdown.svg" alt="dropdown" />
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 origin-top-left bg-neutral-700 w-55 rounded-md shadow-lg border border-neutral-600 px-4 py-2" >
                        <p className="text-preset-7">Switch to Imperial</p>
                        <p className="text-preset-8 text-neutral-300">Temperature</p>
                        <p className="hover:bg-neutral-600">Celsius</p>
                        <p className="hover:bg-neutral-600">Fahrenheit</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Units;