import { setFromIndex } from "../../context/pesistent";
import { Context } from "../../context/principal";
import {SwipeItem} from "./SwipeItem";

interface Props extends Context {
    index: number, 
    color: string, 
    show: () => void
}

const IconLetter = ({ s, color }: { s: string; color: string }) => {
  const letter = s.charAt(0);
  return (
    <span
      className={`grid rounded-full place-content-center text-[24px] text-white font-black size-10 uppercase`}
      style={{ background: color }}
    >
      {letter}
    </span>
  );
};
export function HistoryItem(props: Props) {
    const name = props.nombre
    const color = props.color ??  "#e56b6f"
    const handleClick = () => {
        setFromIndex(props.index)
        props.show(); 
    }
    return (
      <SwipeItem
        color={color}
        className={`flex rounded-[2rem] items-center cursor-pointer history-item h-10`}
        id={props.id}
        onClick={handleClick}
      >
        <IconLetter s={name} color={color} />
        <span className="max-w-[150px] overflow-hidden px-2">{name}</span>
      </SwipeItem>
    );
  }
  