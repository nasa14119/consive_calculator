import moment from 'moment/min/moment-with-locales'
import './index.css'
import { useControllerStore } from './context/controller'
import { NewPage } from './pages/New';
import { ResultPage } from './pages/Results';
import { HistoryMenu } from './components/HistoryMenu';
moment.locale("es")

function App() {
  const controllerStore = useControllerStore(state => state.page); 
  const changePage = useControllerStore(state => state.changePage); 
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
      </div>
      <HistoryMenu/>
    </>
  )
}

export default App
