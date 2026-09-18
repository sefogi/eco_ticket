import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom'

import Home from '../pages/Home'
import Eventos from '../pages/Eventos'
import Mis_tickets from '../pages/Mis_tickets'
import Soporte from '../pages/Soporte'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import Agente from '../pages/Agente'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { getCurrentUser } from '../auth/auth'

function ProtectedRoute() {
  const user = getCurrentUser()
  const location = useLocation()

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  return <Outlet />
}

function RoleRoute({
  role,
}: {
  role: 'ADMINISTRADOR' | 'AGENTE' | 'CLIENTE'
}) {
  const user = getCurrentUser()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (user.role !== role) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />

        <Route path="/eventos" element={<Eventos />} />

        <Route path="/soporte" element={<Soporte />} />

        <Route path="/login" element={<Login />} />


        {/* Rutas que requieren login */}
        <Route element={<ProtectedRoute />}>

          <Route
            path="/mis_tickets"
            element={<Mis_tickets />}
          />

        </Route>


        {/* Solo ADMINISTRADOR */}
        <Route element={<RoleRoute role="ADMINISTRADOR" />}>

          <Route
            path="/admin"
            element={<Admin />}
          />

        </Route>


        {/* Solo AGENTE */}
        <Route element={<RoleRoute role="AGENTE" />}>

          <Route
            path="/agente"
            element={<Agente />}
          />

        </Route>


        {/* Ruta desconocida */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default RoutesApp