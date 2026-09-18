import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Eventos from '../pages/Eventos'
import Mis_tickets from '../pages/Mis_tickets'
import Soporte from '../pages/Soporte'
import Login from '../pages/Login'

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/eventos' element={<Eventos />} />
            <Route path='/mis_tickets' element={<Mis_tickets />} />
            <Route path='/soporte' element={<Soporte />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp