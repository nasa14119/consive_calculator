import { z } from "zod";
import { create } from "zustand";
import { uid } from "../utils";
const SchemaSubmit = z.object({
    nombre: z.string().min(4).max(20), 
    nacimiento: z.tuple([z.number().min(1900).max(new Date().getFullYear()),z.number().min(1).max(12), z.number().min(1).max(31)])
})
type context = {
    id: string,
    nombre: string, 
    nacimiento: number[], 
}
export type newValue = z.infer< typeof SchemaSubmit>

type Principal = {
    context: null | context, 
    setContext : (v:context) => void, 
    handleSubmit: (v:newValue) => void
}
export const usePrincipalStore = create<Principal>( (set) => ({
    context: null, 
    setContext : (v) => set(state => ({...state, context:{...v} })), 
    handleSubmit: ( values) => {
        const parse = SchemaSubmit.safeParse(values)
        if("error" in parse) throw parse.error?.errors
        const newValue : context = {
            id: uid(), 
            ...parse.data
        }
        set(state => ({...state, context: {...newValue}})); 
    }
}))
