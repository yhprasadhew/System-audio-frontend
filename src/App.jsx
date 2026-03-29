import './app.css'
import Adminpage from './pages/admin/Adminpage'
import Homepage from './pages/home/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testing from './components/testing'
import Login from './pages/login/loginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path ="/testing" element={<Testing />} />
        <Route path="/admin/*" element={<Adminpage />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App