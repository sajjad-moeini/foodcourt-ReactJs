import { useContext, useState } from 'react'
import Routes from './Routes'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import { useRoutes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import { foodCurtContext } from './context/foodCurtContext'
function App() {

  const router = useRoutes(Routes)
  const [isMapShow, setIsMapShow] = useState(false)

  return (
    <>
      <foodCurtContext.Provider value={{
        isMapShow,
        setIsMapShow,

      }}>
        <div className="app-container">
          <NavBar />
          {router}
        </div>
      </foodCurtContext.Provider>
    </>
  )
}

export default App
