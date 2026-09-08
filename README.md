# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Eco Ticket

  Aplicacion web para consultar eventos y gestionar tickets, construida con React,
  TypeScript, Vite, React Router y Bootstrap.

  ## Requisitos

  - Node.js 20 o superior.
  - `pnpm` instalado. Si no lo tienes, ejecuta `corepack enable`.

  ## 1. Crear un proyecto React con Vite

  Para crear un proyecto nuevo desde cero:

  ```bash
  pnpm create vite eco-ticket --template react-ts
  cd eco-ticket
  pnpm install
  pnpm run dev
  ```

  Vite mostrara una URL local, normalmente `http://localhost:5173`.

  En este repositorio las dependencias ya estan instaladas. Para instalarlas de
  nuevo despues de clonar el proyecto:

  ```bash
  pnpm install
  ```

  Comandos disponibles:

  ```bash
  pnpm run dev      # Inicia el servidor de desarrollo
  pnpm run build    # Comprueba tipos y genera la version de produccion
  pnpm run lint     # Ejecuta ESLint
  pnpm run preview  # Sirve localmente la compilacion de produccion
  ```

  ## 2. Instalar Bootstrap

  Instala Bootstrap y su bundle de JavaScript:

  ```bash
  pnpm add bootstrap
  ```

  Importa los estilos y los componentes interactivos en `src/main.tsx`:

  ```tsx
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'
  ```

  Despues puedes usar las clases de Bootstrap en cualquier componente:

  ```tsx
  function Alerta() {
    return <div className="alert alert-success">Operacion completada</div>
  }

  export default Alerta
  ```

  ## 3. Crear componentes

  Los componentes reutilizables deben vivir en `src/components`. Un componente
  funcional recibe datos mediante props y devuelve JSX:

  ```tsx
  type ButtonProps = {
    texto: string
    onClick?: () => void
  }

  function Button({ texto, onClick }: ButtonProps) {
    return (
      <button className="btn btn-primary" onClick={onClick}>
        {texto}
      </button>
    )
  }

  export default Button
  ```

  Guardalo como `src/components/Button.tsx` y usalo desde una pagina:

  ```tsx
  import Button from '../components/Button'

  function Ejemplo() {
    return <Button texto="Comprar ticket" onClick={() => alert('Ticket agregado')} />
  }

  export default Ejemplo
  ```

  Recomendaciones:

  - Usa nombres en PascalCase para los componentes: `Navbar.tsx`, `Card.tsx`.
  - Mantiene la logica reutilizable en componentes y la logica propia de una
    vista en la pagina correspondiente.
  - Usa props tipadas con `type` o `interface`.

  ## 4. Crear paginas

  Las paginas representan vistas completas y se guardan en `src/pages`:

  ```tsx
  function Eventos() {
    return (
      <main className="container py-4">
        <h1>Eventos</h1>
        <p>Consulta los proximos eventos disponibles.</p>
      </main>
    )
  }

  export default Eventos
  ```

  Guarda el archivo como `src/pages/Eventos.tsx`.

  ## 5. Configurar las rutas

  Instala React Router si el proyecto es nuevo:

  ```bash
  pnpm add react-router-dom
  ```

  En este proyecto, las rutas se centralizan en `src/routes/Routes.tsx`:

  ```tsx
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Eventos from '../pages/Eventos'
  import Home from '../pages/Home'

  function RoutesApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </BrowserRouter>
    )
  }

  export default RoutesApp
  ```

  Para navegar sin recargar la pagina, usa `Link`:

  ```tsx
  import { Link } from 'react-router-dom'

  function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Eco Ticket</Link>
          <Link className="nav-link text-white" to="/eventos">Eventos</Link>
        </div>
      </nav>
    )
  }

  export default Navbar
  ```

  ## Estructura recomendada

  ```text
  src/
  |-- components/     # Componentes reutilizables
  |-- pages/          # Vistas asociadas a rutas
  |-- routes/         # Configuracion de React Router
  |-- hooks/          # Hooks personalizados
  |-- App.tsx         # Componente principal
  `-- main.tsx        # Punto de entrada e imports globales
  ```

  ## Verificar el proyecto

  Antes de compartir cambios, ejecuta:

  ```bash
  pnpm run lint
  pnpm run build
  ```

  Si ambos comandos terminan correctamente, la aplicacion esta lista para
  probarse en desarrollo o desplegarse.
