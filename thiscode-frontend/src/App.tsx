import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import DashboardPage from './page/DashboardPage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
