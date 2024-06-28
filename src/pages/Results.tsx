import { useDetailsStore, usePrincipalStore } from "../context/principal";
import { useControllerStore } from "../context/controller";

export function ResultPage() {
    const {context} = usePrincipalStore(state => state)
    const redirect = useControllerStore(state => state.changePage); 
    const message = useDetailsStore(state => state.message)
    if(context === null || message === null) redirect("new")


    return <div className="min-h-[100dvh] grid place-content-center relative grid-cols-[80%]">
        <header className="relative">
            <h2 className="text-6xl font-bold capitalize text-center my-2">{message?.month}</h2>
            <span className="absolute -top-5">{context?.nombre} eres de...</span>
        </header>
        <main>
            <div className="grid grid-cols-2 mb-2">
                <span className="col-span-2 font-semibold">Fuiste consevido entre:</span>
                <span className="justify-self-center">{message?.consiveDate}</span>
                <span className="justify-self-center">{message?.consiveEnd}</span>
            </div>
            <div className="grid grid-cols-1 mb-2">
                <span className="font-semibold text-sm">Felicidades fuiste un regalo de o del:</span>
                <span className="justify-self-center capitalize text-3xl font-black">{message?.regalo}</span>
            </div>
            <p className="font-light text-sm max-w-[75ch]">{message?.body}</p>
        </main>
        <div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-black/80">
            <img 
                className="size-full object-cover"
                src={message?.img} 
                alt="" 
            />
        </div>
    </div>
}