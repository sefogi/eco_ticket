const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-success border-5 bg-white">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center fw-bold text-success ms-lg-5" href="/">
          <img src="logo.png" alt="EcoTíquet" height="60" className="me-2" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarEcoTicket"
          aria-controls="navbarEcoTicket"
          aria-expanded="false"
          aria-label="Abrir menu de navegacion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarEcoTicket">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-secondary fw-semibold fs-5 " href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fw-semibold fs-5" href="/Eventos">
                Eventos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fw-semibold fs-5" href="/MisTickets">
                Mis Tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fw-semibold fs-5" href="/Soporte">
                Soporte y Ayuda
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 me-lg-5">
            <a className="fw-semibold text-success fs-5"href="/Login">Mi Cuenta</a>
            <i className="bi bi-person-circle fs-2 text-success"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;