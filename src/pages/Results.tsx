import { useDetailsStore, usePrincipalStore } from "../context/principal";
import { useControllerStore } from "../context/controller";

export function ResultPage() {
    const {context} = usePrincipalStore(state => state)
    const redirect = useControllerStore(state => state.changePage); 
    const message = useDetailsStore(state => state.message)
    if(context === null || message === null) redirect("new")


    return (
      <div className="min-h-[100dvh] grid place-content-center relative grid-cols-[80%]">
        <header className="relative">
          <h2 className="text-6xl font-bold capitalize text-center my-2">
            {message?.month}
          </h2>
          <span className="absolute -top-5">{context?.nombre} eres de...</span>
        </header>
        <main>
          <div className="grid grid-cols-2 mb-2">
            <span className="col-span-2 font-semibold">
              Fuiste consevido entre:
            </span>
            <span className="justify-self-center">{message?.consiveDate}</span>
            <span className="justify-self-center">{message?.consiveEnd}</span>
          </div>
          <div className="grid grid-cols-1 mb-2">
            <span className="font-semibold text-sm">
              Felicidades fuiste un regalo de o del:
            </span>
            <span className="justify-self-center capitalize text-3xl font-black text-center">
              {message?.regalo}
            </span>
          </div>
          <p className="font-light text-sm max-w-[75ch]">{message?.body}</p>
        </main>
        <div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-black/70">
          <img className="size-full object-cover" src={message?.img} alt="" />
        </div>
        <div
          className="fixed bottom-5 left-5 p-2 flex items-center gap-x-2 bg-zinc-600/40 rounded-2xl"
          onClick={() => {
            const redirect = useControllerStore.getState().changePage;
            redirect("new");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          <span className="text-xs">Nueva Persona</span>
        </div>
      </div>
    );
}