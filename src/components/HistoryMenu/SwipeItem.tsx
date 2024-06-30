import { HTMLAttributes, useEffect, useRef, useState } from "react"
import { deleteId } from "../../context/pesistent";

interface Props extends HTMLAttributes<HTMLDivElement>{
    id: string, 
    color: string, 
}

export function SwipeItem({children, className, id, color, ...rest}: Props) {
    const container = useRef<HTMLDivElement>(null)
    const cordenates = useRef({start_x: 0, end_x:0}); 
    const [move, setMove] = useState(0)
    const touch = useRef(false)
    const handleDelete = (e?: React.MouseEvent<HTMLSpanElement>) => {
        e && e.stopPropagation(); 
        deleteId(id)
    }
    const handleDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const state = cordenates.current
        touch.current = true
        state.start_x = e.clientX
    }
    const handleUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!container.current) return 
        touch.current = false
        setMove(0); 
        if(move >= 5){
            handleDelete(e)
        }
    }

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) =>{
        if(!container.current) return 
        const current = (e.clientX - cordenates.current.start_x) * - 1
        if(!touch.current) return
        setMove(current * 5 / 130)
    }
    const resetState = () => {
        if(!container.current) return 
        touch.current = false
        setMove(0);  
    }

    const handleTouchStart = (e: React.TouchEvent) => {
      const x = e.touches[0].clientX
      const state = cordenates.current
      touch.current = true
      state.start_x = x
  }
    const handleTouchMove = (e: React.TouchEvent) => {
      if(!container.current) return 
      const x = e.touches[0].clientX
      const current = (x - cordenates.current.start_x) * - 1
      if(!touch.current) return
      setMove(current * 5 / 130)
  }
    const handleTouchEnd = () => {
      resetState()
      if(move >= 5){
        handleDelete()
      }
  }
  useEffect(() => {
    if (container.current === null) return;
    const handleTouch = () => {
      touch.current = true;
    };
    container.current.addEventListener("click", handleTouch);
    return container.current.removeEventListener("click", handleTouch);
  }, []);
  return (
    <>
      <div
        className={`history-item ${className} select-none`}
        ref={container}
        onMouseMove={handleMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseLeave={resetState}
        style={{background: `${color}55`, transform: `translateX(-${move >= 5 ? 5: move < 0 ? 0 : move}rem)`}}
        {...rest}
      >
        {children}
        <span
          className="h-full w-20 absolute -right-20 p-2 text-red-700 trash-icon"
          data-visible={move >= 5}
          onClick={handleDelete}
        >
          <TrashIcon />
        </span>
      </div>
    </>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}