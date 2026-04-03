import './app.css'
import Adminpage from './pages/admin/Adminpage'
import Homepage from './pages/home/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testing from './components/testing'
import Login from './pages/login/LoginPage'
import { Toaster } from 'react-hot-toast'
import Register from './pages/register/Register'

function App() {
  return (
    <>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: "20px", zIndex: 99999 }}
        toastOptions={{
          style: { fontSize: "16px", padding: "12px 20px" }
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/testing" element={<Testing />} />
          <Route path="/admin/*" element={<Adminpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Homepage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App