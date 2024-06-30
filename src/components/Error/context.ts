import { create } from "zustand"

export type ErrorContext = {
    state: boolean, 
    message: string, 
    setError: (prev: (prev:ErrorContext) => ErrorContext) => void
}

export const useErrorStore = create<ErrorContext>(set => ({
    state:false,
    message: "", 
    setError: (state) => set(state)
}))

export const triggerError = async (m: string) => {
    const setError:ErrorContext["setError"] = useErrorStore.getState().setError; 
    setError(prev => ({...prev, message: m, state: true})); 
    await new Promise((res) => setTimeout(res, 1500))
    setError(prev => ({...prev, message: "", state: false})); 
}