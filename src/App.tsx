import moment from 'moment/min/moment-with-locales'
import './index.css'
import { useControllerStore } from './context/controller'
import { NewPage } from './pages/New';
import { ResultPage } from './pages/Results';
import { usePrincipalStore } from './context/principal';
moment.locale("es")

function App() {
  const controllerStore = useControllerStore(state => state.page); 
  const changePage = useControllerStore(state => state.changePage); 
  const setContext = usePrincipalStore(state => state.setContextTo)
  return (
    <>
      <main className='min-h-[100dvh]'>
        {
          controllerStore === "new" && <NewPage/>
        }
        {
          controllerStore === "result" && <ResultPage/>
        }
      </main>
      <div className='bg-[var(--background)] z-50 fixed bottom-2 text-sm flex gap-1 *:outline outline-slate-300 *:rounded-3xl *:p-2'>
        <button onClick={() => changePage('new')}>Change New</button>
        <button onClick={() => changePage('result')}>Change Result</button>
        <button onClick={() => setContext({id: "1", nacimiento: [2003,3, 15], nombre: "Lo hice yo"})}>Change Result</button>
      </div>
    </>
  )
}

export default App
