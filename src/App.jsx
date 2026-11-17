import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Stores from './pages/Stores'
import Customers from './pages/Customers'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="stores" element={<Stores />} />
        <Route path="customers" element={<Customers />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
