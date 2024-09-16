import './App.css'

import { Home } from './components/Pages/Home/Home'
import { TasksProvider } from './components/Context/Context'

function App() {

  return (
    <>
      <TasksProvider>
      <Home/>
      </TasksProvider>
    </>
  )
}

export default App
