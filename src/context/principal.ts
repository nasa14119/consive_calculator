import { z } from "zod";
import { create } from "zustand";
import { uid } from "../utils";
import moment from "moment/min/moment-with-locales";
import { Message, Messages } from "../utils/Messages";
import { useControllerStore } from "./controller";
import { usePersistant } from "./pesistent";
const SchemaSubmit = z.object({
    nombre: z.string().min(4).max(20), 
    nacimiento: z.tuple([z.number().min(1900).max(new Date().getFullYear()),z.number().min(1).max(12), z.number().min(1).max(31)]), 
    prematuro: z.number().nullable()
})
export type Context = {
    id: string,
    nombre: string, 
    nacimiento: number[], 
    prematuro: number | null
}
export type newValue = z.infer< typeof SchemaSubmit>
type Principal = {
    context: null | Context, 
    handleSubmit: (v:newValue) => void, 
    setContextTo: (v:Context) => void
}

export const usePrincipalStore = create<Principal>( (set) => ({
    context: null, 
    handleSubmit: async ( values) => {
        const updateResult = useDetailsStore.getState().updateMessage
        const saveValue = usePersistant.getState().pushNewValue
        const parse = SchemaSubmit.safeParse(values); 
        if("error" in parse) throw parse.error?.errors
        const newValue : Context = {
            id: uid(), 
            ...parse.data
        }
        set(state => ({
            ...state,
            context: {...newValue}, 
        })); 
        updateResult(); 
        saveValue(newValue)
    }, 
    setContextTo: (context: Context) => {
        const updateResult = useDetailsStore.getState().updateMessage
        set(state => ({...state, context}))
        updateResult(); 
    }
}))
interface MessageDetails extends Message {
    month: string, 
    consiveDate: string, 
    consiveEnd: string, 
}
type Details = {
    message: null | MessageDetails, 
    updateMessage: () => void 
}
export const useDetailsStore = create<Details>(set => ({
    message: null, 
    updateMessage: async () => {
        const redirect = useControllerStore.getState().changePage
        const contextPrincipal = usePrincipalStore.getState().context
        if(contextPrincipal === null) return 
        const [ano, mes, dia] = contextPrincipal.nacimiento
        let consive: () => moment.Moment; 
        contextPrincipal.prematuro === null ? consive = () => moment([ano, mes - 1, dia]).locale("es").subtract(40, "weeks"): consive = () => moment([ano, mes - 1, dia]).locale("es").subtract(contextPrincipal.prematuro, "weeks")
        const messageFactory = new Messages(consive); 
        const values = await messageFactory.getMessage()
        const newMessage:MessageDetails = {
            consiveDate: consive().format("L"), 
            consiveEnd: consive().add("6", "day").format("L"),
            month: consive().format("MMMM"),
            ...values
        }
        set(state => ({...state, message:newMessage}))
        redirect("result")
    }
}))