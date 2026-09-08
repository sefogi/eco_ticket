function Footer() {
  return (
    <footer className="bg-white text-success py-1 mt-1">
      <div className="container-fluid px-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 align-items-start">
          <div className="col d-flex flex-column">
           
            <img src="logo.png" alt="EcoTíquet" height="72" className="mb-3 object-fit-contain object-position-start" />
            <p className="mb-0">Encuentra y gestiona tus tickets de eventos.</p>
          </div>
          <div className="col d-flex flex-column">
            <h5 className="mb-1">Enlaces</h5>
            <nav className="d-flex flex-column gap-2">
              <a className="text-success text-decoration-none" href="/">
                Inicio
              </a>
              <a className="text-success text-decoration-none" href="#eventos">
                Eventos
              </a>
              <a className="text-success text-decoration-none" href="#">
                Mis tickets
              </a>
            </nav>
          </div>
          <div className="col d-flex flex-column">
            <h5 className="mb-3">Soporte</h5>
            <p className="mb-0">¿Necesitas ayuda? Contacta con nosotros.</p>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0">© 2026 Eco Ticket</p>
      </div>
    </footer>
  )
}

export default Footer