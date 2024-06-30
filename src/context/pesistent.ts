import { create } from "zustand";
import { Context, usePrincipalStore } from "./principal";
const KEY = "items"
export type PersistantContext = {
    persistant: Context[], 
    pushNewValue: (context : Context) => void, 
    deleteId: (id: string) => void, 
}

const setInicialPersistant = () => {
    const saved = localStorage.getItem(KEY); 
    if(saved === null){
        localStorage.setItem(KEY, JSON.stringify([])); 
        return []
    }
    return JSON.parse(saved);
}
const saveInLocalStorage = (v:Context[]) => {
    localStorage.setItem(KEY, JSON.stringify([...v]))
}
export const usePersistant = create<PersistantContext>(set => ({
    persistant: setInicialPersistant(), 
    pushNewValue: (v) => {
        set( state => {
            saveInLocalStorage([...state.persistant, v])
            return {...state, persistant:[v, ...state.persistant] }
        })
    }, 
    deleteId: (id) => {
        set(state => {
            const filterPersist = state.persistant.filter(v => v.id !== id); 
            saveInLocalStorage(filterPersist); 
            return {...state, persistant: filterPersist}
        })
    }
})
)
export const deleteId = (id: string) => {
    const persistantFunc = usePersistant.getState().deleteId
    persistantFunc(id)
}
export const setFromIndex  = (i:number) => {
    const context = usePrincipalStore.getState()
    const persistant = usePersistant.getState().persistant
    context.setContextTo(persistant[i]); 
}