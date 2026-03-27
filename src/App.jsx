import './app.css'
import Adminpage from './components/Adminpage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Adminpage />
      </div>
    </BrowserRouter>
  )
}

export default App