import {Outlet} from 'react-router-dom'
import Navigation from './components/Navigation'
import 'react-bootstrap'

function App() {


  return (
    <>

    <Navigation />
    <Outlet />
    
    </>
  )
}

export default App
