import moment from 'moment/min/moment-with-locales'
import './index.css'
import { useControllerStore } from './context/controller'
import { NewPage } from './pages/New';
import { ResultPage } from './pages/Results';
import { HistoryMenu } from './components/HistoryMenu';
moment.locale("es")

function App() {
  const controllerStore = useControllerStore(state => state.page); 
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
      <HistoryMenu/>
    </>
  )
}

export default App
