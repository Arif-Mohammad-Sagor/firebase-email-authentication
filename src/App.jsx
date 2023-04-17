import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}

export default App
