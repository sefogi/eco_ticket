import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Role = 'AGENTE' | 'CLIENTE' | 'ADMINISTRADOR'

type User = {
  username: string
  password: string
  role: Role
}

const users: User[] = [
  {
    username: 'agente',
    password: '1234',
    role: 'AGENTE',
  },
  {
    username: 'cliente',
    password: '1234',
    role: 'CLIENTE',
  },
  {
    username: 'admin',
    password: '1234',
    role: 'ADMINISTRADOR',
  },
]

function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const user = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    )

    if (!user) {
      setError('Usuario o contraseña incorrectos')
      return
    }

    // Guardamos la sesión temporalmente
    localStorage.setItem('user', JSON.stringify(user))

    setError('')

    // Redirigimos según el rol
    if (user.role === 'ADMINISTRADOR') {
      navigate('/admin')
    } else if (user.role === 'AGENTE') {
      navigate('/agente')
    } else {
      navigate('/')
    }
  }

  return (
    <main className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow border-0 rounded-4" style={{ width: '100%', maxWidth: '420px' }}>
        
        <div className="card-body p-4 p-md-5">

          <div className="text-center mb-4">
            <h1 className="h3 fw-bold text-success">
              Iniciar sesión
            </h1>

            <p className="text-secondary mb-0">
              Accede a tu cuenta de Eco Tíquet
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                Usuario
              </label>

              <input
                id="username"
                type="text"
                className="form-control form-control-lg"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Contraseña
              </label>

              <input
                id="password"
                type="password"
                className="form-control form-control-lg"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-success btn-lg w-100 mt-2"
            >
              Iniciar sesión
            </button>

          </form>

        </div>
      </div>
    </main>
  )
}

export default Login