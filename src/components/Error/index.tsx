import { useErrorStore } from "./context"
import "./styles.css"
export function ErrorElement() {
    const {state, message} = useErrorStore(state => state); 
  return (
    <>
        {state && (<div className="fixed bottom-0 h-20 inset-x-0 max-w-[500px] md:mx-auto"><span className="error-message">{message}</span></div>)
        }
    </>
  )
}