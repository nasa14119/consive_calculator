import moment from "moment/min/moment-with-locales";
import { usePrincipalStore } from "../context/principal";
import { useControllerStore } from "../context/controller";

export function ResultPage() {
    const context = usePrincipalStore(state => state.context)
    const redirect = useControllerStore(state => state.changePage); 
    if(context === null) redirect("new")
    return <>
        <div>{JSON.stringify(context)}</div>
    </>
}