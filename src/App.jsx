import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Page1 from "./Page1"
// import LinearProgress from "./LinearProgress"
import Form from "./form/Form"
import DetailPage from "./form/DetailPage"
import Header from "./form/Header"
import Footer from "./form/Footer"
// import TemporaryDrawer from './Drawers'

function App() {

  return (
    <BrowserRouter>

    <Header/>
    <Routes>
      {/* <Route path='/' element={<Page1/>}/> */}
      <Route path='/' element={<Form/>}/>
      <Route path='/detail/:movieId' element={<DetailPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
