import moment from "moment";
import { SelectPrematuro } from "../components/Select";
import { Input, InputDay } from "../components/Input";
import { newValue, usePrincipalStore } from "../context/principal";
import { FormEventHandler } from "react";
import { useControllerStore } from "../context/controller";
import { removeNonNumeric } from "../utils";
import { ErrorElement } from "../components/Error";
import { triggerError } from "../components/Error/context";
import { z } from "zod";
const SchemaFormData = z.object({
  dia: z.string().min(1, "El dia es requerido"), 
  mes: z.string().min(1,"El mes es requerido"), 
  ano: z.string().min(1, "El año es requerido"), 
  nombre: z.string().min(1,"El nombre es requerido"), 
})
export function NewPage(){
    const sendToStore = usePrincipalStore(state => state.handleSubmit); 
    const redirect = useControllerStore(state => state.changePage)
    const handleSubmit:FormEventHandler = async (e) => {
      e.preventDefault()
      const data = new FormData(e.target as HTMLFormElement); 
      const parseData = Object.fromEntries(data)
      const check = SchemaFormData.safeParse(parseData)
      if("error" in check) return triggerError(check.error?.errors[0].message as string)
      const prematuro = parseData.prematuro === "No" ? null : removeNonNumeric(parseData.prematuro as string)
      const newValue: newValue = {
        nacimiento: [Number(parseData.ano), Number(parseData.mes), Number(parseData.dia)], 
        nombre: parseData.nombre.toString(),
        prematuro
      }
      try {
        await sendToStore(newValue); 
        redirect("result")
      } catch (error) {
        triggerError(error as string)
      }
    }
    return (
      <>
        <div className="grid h-[100dvh] p-[10%] place-content-center">
          <form className="border border-zinc-700 size-full border-solid flex flex-col gap-y-4 rounded-[0.5rem] p-2 justify-center" onSubmit={handleSubmit}>
            <div>
              <h2 className="font-semibold text-center text-lg">Ingresa tu fecha de nacimiento</h2>
              <div className="grid grid-cols-3 gap-x-2 my-2">
                <InputDay id="dia" label="Dia" placeholder="00" min={1} max={31} name="dia"/>
                <InputDay id="mes" label="Mes" placeholder="00" min={1} max={12} name="mes"/>
                <InputDay id="ano" label="Año" placeholder="2024" min={1900} max={moment().get("year")} name="ano"/>
              </div>
            </div>
            <Input label="Nombre" id="nombre" name="nombre"/>
            <button className="bg-zinc-700 p-3 rounded-[0.5rem] outline-none font-bold outline focus:outline-zinc-700">
              Calcular
            </button>
            <SelectPrematuro/>
          </form>
        </div>
        <ErrorElement />
      </>
    );
}