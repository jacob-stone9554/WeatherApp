type Option = {
    label: string;
    value: string;
    selected?: boolean;
};

type UnitOptionProps = {
    title: string;
    options: Option[];
    onSelect: (value: string) => void;
    showDivider?: boolean;
};

function UnitOption({ title, options, onSelect, showDivider = true }: UnitOptionProps) {
    return (
        <>
            <div className="flex flex-col">
                <p className="text-preset-8 text-neutral-300 pb-3 px-1">{title}</p>
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        className={`flex flex-row justify-between items-center px-2 h-8 rounded-md
                            ${opt.selected
                            ? "bg-neutral-600 text-white"
                            : "text-neutral-200 hover:bg-neutral-600 hover:text-white"
                        }`}
                        onClick={() => onSelect(opt.value)}
                    >
                        {opt.label}
                        {opt.selected && <img src="/images/icon-checkmark.svg" alt="Checkmark" className="h-4 w-4 " />}
                    </button>
                ))}
                {showDivider && <hr className={`my-2 border-neutral-600 `} />}
            </div>
        </>
    );
}

export default UnitOption;