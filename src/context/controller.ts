import { create } from "zustand";
type Pages = "new" | "result"; 

type StoreController = {
    page: Pages, 
    changePage: (v: Pages) => void
}
export const useControllerStore = create<StoreController>( (set) => ({
    page: "result", 
    changePage : (v) => set(state => ({...state, page: v}))
}))
