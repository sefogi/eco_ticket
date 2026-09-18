import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../auth/auth'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const from = location.state?.from || '/'

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError('')

    const user = login(username, password)

    if (!user) {
      setError('Usuario o contraseña incorrectos')
      return
    }

    switch (user.role) {
      case 'ADMINISTRADOR':
        navigate('/admin')
        break

      case 'AGENTE':
        navigate('/agente')
        break

      case 'CLIENTE':
        navigate(from)
        break
    }
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4">

          <div className="card shadow border-0">
            <div className="card-body p-4">

              <div className="text-center mb-4">
                <img
                  src="/logo.png"
                  alt="Eco Tíquet"
                  height="60"
                  className="mb-3"
                />

                <h2 className="text-success fw-bold">
                  Iniciar sesión
                </h2>

                <p className="text-muted">
                  Accede a tu cuenta de Eco Tíquet
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="form-label fw-semibold"
                  >
                    Usuario
                  </label>

                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(event) =>
                      setUsername(event.target.value)
                    }
                    placeholder="Introduce tu usuario"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label fw-semibold"
                  >
                    Contraseña
                  </label>

                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Introduce tu contraseña"
                    required
                  />
                </div>

                {error && (
                  <div className="alert alert-danger py-2">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Iniciar sesión
                </button>

              </form>

              <hr />

              <div className="small text-muted">
                <p className="mb-1 fw-semibold">
                  Usuarios de prueba
                </p>

                <p className="mb-1">
                  Admin: <strong>admin / 1234</strong>
                </p>

                <p className="mb-1">
                  Agente: <strong>agente / 1234</strong>
                </p>

                <p className="mb-0">
                  Cliente: <strong>cliente / 1234</strong>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Login