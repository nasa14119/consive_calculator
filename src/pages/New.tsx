import { SelectPrematuro } from "../components/Select";

export function NewPage(){
    return (
      <div className="grid h-[100dvh] p-[10%]">
        <form className="border border-white size-full border-solid flex flex-col gap-y-2 rounded-[0.5rem] p-2 justify-center">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <SelectPrematuro/>
        </form>
      </div>
    );
}