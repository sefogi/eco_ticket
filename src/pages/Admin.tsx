import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../auth/auth'

function Admin() {
  const navigate = useNavigate()
  const user = getCurrentUser()

  return (
    <main className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="text-success fw-bold">
            Panel de Administrador
          </h1>

          <p className="text-muted mb-0">
            Bienvenido, {user?.username}
          </p>
        </div>

        <button
          className="btn btn-outline-success"
          onClick={() => navigate('/')}
        >
          Ver sitio
        </button>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <i className="bi bi-calendar-event fs-1 text-success"></i>

              <h4 className="mt-3">
                Eventos
              </h4>

              <p className="text-muted">
                Crear, editar y eliminar eventos.
              </p>

              <button className="btn btn-success">
                Gestionar eventos
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <i className="bi bi-people fs-1 text-success"></i>

              <h4 className="mt-3">
                Usuarios
              </h4>

              <p className="text-muted">
                Administrar usuarios y roles.
              </p>

              <button className="btn btn-success">
                Gestionar usuarios
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <i className="bi bi-ticket-perforated fs-1 text-success"></i>

              <h4 className="mt-3">
                Tickets
              </h4>

              <p className="text-muted">
                Consultar y administrar tickets.
              </p>

              <button className="btn btn-success">
                Ver tickets
              </button>
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}

export default Admin