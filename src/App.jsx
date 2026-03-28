import './app.css'
import Adminpage from './pages/admin/Adminpage'
import Homepage from './pages/home/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Adminpage />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App