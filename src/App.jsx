import './App.css'
import Adminpage from './pages/admin/Adminpage'
import Homepage from './pages/home/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testing from './components/testing'
import Login from './pages/login/loginPage'
import { Toaster } from 'react-hot-toast'
import Register from './pages/register/register'
import AdminUpdateItem from './pages/admin/updateProductpage'
import ProductOverview from './pages/home/productoverview'

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
          {/* Admin edit route */}
          <Route path="/admin/items/edit/:id" element={<AdminUpdateItem />} />

          <Route path="/login" element={<Login />} /> 
          <Route path="/testing" element={<Testing />} />
          <Route path="/admin/*" element={<Adminpage />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ Product overview route */}
          <Route path="/product/:id" element={<ProductOverview />} />

          {/* Homepage route */}
          <Route path="/*" element={<Homepage />} />

          {/* 404 fallback */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App