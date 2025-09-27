import { useState, useRef, useEffect } from "react";
import UnitOption from "./UnitOption.tsx";
function Units () {
    const [open, setOpen] = useState<boolean>(false);
    const [tempUnit, setTempUnit] = useState("celsius");
    const [windUnit, setWindUnit] = useState("kmh");
    const [precipUnit, setPrecipUnit] = useState("mm");
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
                    <p className="mb-1">Units</p>
                    <img src="/images/icon-dropdown.svg" alt="dropdown" />
                </button>
                {open && (
                    <div className="absolute right-0 mt-2 origin-top-left bg-neutral-700 w-55 rounded-md shadow-lg border border-neutral-600 px-4 py-2" >
                        <p className="text-preset-7 mb-3">Switch to Imperial</p>
                        <UnitOption
                            title="Temperature"
                            options={[
                                { label: "Celsius (°C)", value: "celsius", selected: tempUnit === "celsius" },
                                { label: "Fahrenheit (°F)", value: "fahrenheit", selected: tempUnit === "fahrenheit" },
                            ]}
                            onSelect={(v) => setTempUnit(v)}
                        />
                        <UnitOption
                            title="Wind Speed"
                            options={[
                                { label: "km/h", value: "kmh", selected: windUnit === "kmh" },
                                { label: "mph", value: "mph", selected: windUnit === "mph" },
                            ]}
                            onSelect={(v) => setWindUnit(v)}
                            />
                        <UnitOption
                            title="Precipitation"
                            options={[
                                { label: "Millimeters (mm)", value: "mm", selected: precipUnit === "mm" },
                                { label: "Inches (in)", value: "in", selected: precipUnit === "in" },
                            ]}
                            onSelect={(v) => setPrecipUnit(v)}
                            showDivider={false}
                            />
                    </div>
                )}
            </div>
        </>
    );
}

export default Units;