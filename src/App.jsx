
import reactLogo from './assets/react.svg'
import './App.css'
import{BrowserRouter} from "react-router-dom"
import Router from './components/pages/Router/Router'
import Header from './components/features/Header/Header'
import Footer from './components/features/Footer/Footer'

function App() {


  return (
    <div className="App">
   <BrowserRouter>
   <Header/>
   <Router/>
   <Footer/>
   </BrowserRouter>
    </div>
  )
}

export default App
