import { useContext, useState } from 'react'
import Routes from './Routes'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import { useRoutes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import { foodCurtContext } from './context/foodCurtContext'
import GoogleMap from './Components/GoogleMap/GoogleMap'
import ShownProductBox from './Components/ShownProductBox/ShownProductBox'
import Footer from './Components/Footer/Footer'
function App() {

  const router = useRoutes(Routes)
  const [isMapShow, setIsMapShow] = useState(false)
  const [shownProductId, setShownProductId] = useState()
  const [ShownProduct, setShownProduct] = useState(false)
  const [isLogin,setIsLogin]=useState(false)
  return (
    <>
      <foodCurtContext.Provider value={{
        isMapShow,
        setIsMapShow,
        shownProductId,
        setShownProductId,
        ShownProduct,
        setShownProduct,
      }}>
        <div className="app-container">
          <NavBar />
          {router}
          {isMapShow && <GoogleMap />}
          {ShownProduct && <ShownProductBox />}

        </div>
        <Footer />
      </foodCurtContext.Provider>
    </>
  )
}

export default App
