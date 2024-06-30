import "./styles.css"
import { useState } from "react";
import { usePersistant } from "../../context/pesistent";
import { HistoryItem } from "./HistoryItem";
import { BookIcon } from "./BookIcon";
const COLORS = ["#0d3b66", "#17864b", "#f4d35e", "#ee964b", "#f95738"];

export function HistoryMenu() {
    let currentIndex = 0;
    function move() {
        const l = COLORS.length;
        currentIndex++
        if(currentIndex >= l){
            currentIndex = 0; 
        }
        return COLORS[currentIndex];
    }
    const { persistant } = usePersistant(); 
    const [isVisible , setVisible] = useState(true); 
    const show = () => setVisible(prev => !prev)
  return (
    <>
      <div
        className="history-menu z-50 fixed top-2 right-0 w-[45vw] aspect-square no-scrollbar overflow-scroll flex flex-col gap-y-2"
        data-state={isVisible}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {persistant.map((context, i) => {
          return (
            <HistoryItem
              color={move()}
              {...context}
              index={i}
              key={context.id}
            />
          );
        })}
      </div>
      {(persistant.length === 0) && isVisible && (
          <div
            className="fixed top-2 right-3 bg-zinc-600/50 p-2 rounded-lg cursor-pointer z-50 history-button"
            onClick={show}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
            <span className="text-[10px] font-light absolute -bottom-5 -inset-x-2 text-center bg-zinc-600/50 rounded-3xl">
              Historia Vacio
            </span>
          </div>
        )}
      {!isVisible && (
        <button
          onClick={show}
          className="fixed top-2 right-3 bg-zinc-600/50 p-2 rounded-lg history-button"
        >
          <BookIcon />
        </button>
      )}
      {isVisible && <div className="inset-0 fixed" onClick={show}></div>}
    </>
  );
}
