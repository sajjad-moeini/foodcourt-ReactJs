import { useState } from 'react'
import Routes from './Routes'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import { useRoutes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

function App() {

  const router = useRoutes(Routes)

  return (
    <>
    <div className="app-container">
<NavBar />
     {router}
    </div>
    </>
  )
}

export default App
