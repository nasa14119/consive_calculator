import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    className?: string,
    id: string,
    label: string
}
export function Input({ className, id, label, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={id} className="text-sm">{label}</label>
      <input
        className={`bg-transparent outline-none border-b border-b-white/30 px-2 py-1 ${className} caret-white/70 w-full`}
        id={id}
        {...rest}
      />
    </div>
  );
}
export function InputDay({ className, id, label, ...rest }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm pl-2">{label}</label>
      <input
        type="number"
        className={`outline-none bg-white/30 placeholder:text-white/50 text-white text-center px-2 py-1 ${className} caret-white/70 rounded-[0.5rem]`}
        id={id}
        {...rest}
      />
    </div>
  );
}