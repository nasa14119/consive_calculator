import { useState } from "react";
import "./styles.css"
const Options = [
  { value: "null", body: "No" },
  { value: "1", body: "28 semanas" },
  { value: "2", body: "29 semanas" },
  { value: "3", body: "30 semanas" },
  { value: "4", body: "31 semanas" },
  { value: "5", body: "32 semanas" },
  { value: "6", body: "33 semanas" },
  { value: "7", body: "34 semanas" },
  { value: "8", body: "35 semanas" },
  { value: "9", body: "36 semanas" },
];
export function SelectPrematuro() {
    const [isVisible, setVisible] = useState(false); 
    const [selectedValue, setSelectValue] = useState<string>("No")
  return (
    <div
      className="relative select-prematuro-container"
      onClick={() => setVisible(prev => !prev)}
    >
      <span>¿Eres Prematuro?</span>
      <input
        className="px-2 bg-transparent outline-none caret-transparent"
        value={selectedValue}
        onChange={(e) => setSelectValue(e.target.value)}
        onFocus={() => setVisible(true)}
      />
      <span className="arrow [grid-area:arrow]" data-state={isVisible}>
        <ArrowIcon />
      </span>
      {isVisible && (
        <ul className="absolute top-full bg-black/20 w-full rounded-3xl p-3 cursor-pointer max-w-[500px]">
          {Options.map((v) => (
            <li
              key={v.value}
              onClick={(e) => {
                e.stopPropagation();
                setSelectValue(v.body);
                setVisible(false);
              }}
            >
              {v.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ArrowIcon({className = ""}: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`size-5 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}