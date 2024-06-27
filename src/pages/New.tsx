import moment from "moment";
import { SelectPrematuro } from "../components/Select";
import { Input, InputDay } from "../components/Input";

export function NewPage(){
    return (
      <div className="grid h-[100dvh] p-[10%] place-content-center">
        <form className="border border-zinc-700 size-full border-solid flex flex-col gap-y-4 rounded-[0.5rem] p-2 justify-center">
          <div>
            <h2 className="font-semibold text-center text-lg">Ingresa tu fecha de nacimiento</h2>
            <div className="grid grid-cols-3 gap-x-2 my-2">
              <InputDay id="dia" label="Dia" placeholder="00" min={1} max={31}/>
              <InputDay id="mes" label="Mes" placeholder="00" min={1} max={12}/>
              <InputDay id="ano" label="Año" placeholder="2024" min={1900} max={moment().get("year")}/>
            </div>
          </div>
          <Input label="Nombre" id="nombre"/>
          <button className="bg-zinc-700 p-3 rounded-[0.5rem] outline-none font-bold outline focus:outline-zinc-700">
            Calcular
          </button>
          <SelectPrematuro/>
        </form>
      </div>
    );
}