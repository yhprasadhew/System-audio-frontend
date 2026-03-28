import './app.css'
import Adminpage from './components/Adminpage'
import { BrowserRouter ,Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes path = '/*'>
      <Routes path = 'admin/*' element={<Adminpage/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App