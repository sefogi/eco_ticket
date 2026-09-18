export type Role = 'AGENTE' | 'CLIENTE' | 'ADMINISTRADOR'

export type User = {
  username: string
  role: Role
}

const STORAGE_KEY = 'eco_ticket_user'

export const demoUsers = [
  {
    username: 'admin',
    password: '1234',
    role: 'ADMINISTRADOR' as Role,
  },
  {
    username: 'agente',
    password: '1234',
    role: 'AGENTE' as Role,
  },
  {
    username: 'cliente',
    password: '1234',
    role: 'CLIENTE' as Role,
  },
]

export function login(username: string, password: string): User | null {
  const user = demoUsers.find(
    (user) =>
      user.username === username &&
      user.password === password
  )

  if (!user) {
    return null
  }

  const loggedUser: User = {
    username: user.username,
    role: user.role,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser))

  window.dispatchEvent(new Event('auth-change'))

  return loggedUser
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY)

  window.dispatchEvent(new Event('auth-change'))
}

export function getCurrentUser(): User | null {
  const storedUser = localStorage.getItem(STORAGE_KEY)

  if (!storedUser) {
    return null
  }

  try {
    return JSON.parse(storedUser) as User
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}