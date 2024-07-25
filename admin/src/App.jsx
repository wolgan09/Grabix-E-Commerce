import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Vendors from './pages/Vendors'
import OrderSummary from './pages/OrderSummary'
import Products from './pages/Products'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<OrderSummary />} />
                    <Route path="products" element={<Products />} />
                    <Route path="vendors" element={<Vendors />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
