const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-success border-5 bg-white">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center fw-bold text-success ms-lg-5" href="#">
          <img src="logo.png" alt="EcoTíquet" height="52" className="me-2" />
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
              <a className="nav-link text-secondary fw-semibold" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fw-semibold" href="#eventos">
                Eventos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fw-semibold" href="#">
                Mis Tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fw-semibold" href="#">
                Soporte y Ayuda
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 me-lg-5">
            <span className="fw-bold text-dark">Cuenta</span>
            <div
              className="rounded-circle bg-success"
              style={{ width: '32px', height: '32px' }}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;