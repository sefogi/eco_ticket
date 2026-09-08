import { CalendarDays, Grid3X3, MapPin, Search } from 'lucide-react'

export default function Buscador() {
  return (
    <section className="container-fluid px-2 px-md-5 py-4" aria-label="Buscar eventos">
      <form
        className="row g-0 overflow-hidden rounded-2 border border-success-subtle bg-white shadow-sm"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="col-12 col-md-6 col-xl-2 border-end border-bottom border-success-subtle">
          <div className="input-group h-100">
            <span className="input-group-text border-0 bg-white text-success">
              <MapPin size={21} aria-hidden="true" />
            </span>
            <select id="event-city" className="form-select border-0 bg-white ps-1 py-3" defaultValue="" aria-label="Ciudad">
              <option value="" disabled>Ciudad</option>
              <option value="bogota">Bogotá</option>
              <option value="medellin">Medellín</option>
              <option value="cali">Cali</option>
              <option value="tulua">Tuluá</option>
              <option value="andalucia">Andalucía</option>
              <option value="manizales">Manizales</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-2 border-end border-bottom border-success-subtle">
          <div className="input-group h-100">
            <span className="input-group-text border-0 bg-white text-success">
              <Grid3X3 size={21} aria-hidden="true" />
            </span>
            <select id="event-category" className="form-select border-0 bg-white ps-1 py-3" defaultValue="" aria-label="Categoría">
              <option value="" disabled>Categoría</option>
              <option value="music">Música</option>
              <option value="theater">Teatro</option>
              <option value="sports">Deportes</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-2 border-end border-bottom border-success-subtle">
          <div className="input-group h-100">
            <span className="input-group-text border-0 bg-white text-success">
              <CalendarDays size={21} aria-hidden="true" />
            </span>
            <input id="event-date" type="date" className="form-control border-0 bg-white ps-1 py-3" aria-label="Fecha" />
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4 border-bottom border-success-subtle">
          <div className="input-group h-100">
            <span className="input-group-text border-0 bg-white text-success">
              <Search size={22} aria-hidden="true" />
            </span>
            <input
              id="event-search"
              type="search"
              className="form-control border-0 bg-white ps-1 py-3 fw-semibold"
              placeholder="Buscar por artista, evento..."
              aria-label="Buscar por artista o evento"
            />
          </div>
        </div>

        <div className="col-12 col-xl-2">
          <button type="submit" className="btn btn-success rounded-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 py-3">
            <Search size={22} aria-hidden="true" />
            <span className="d-inline d-xl-none">Buscar eventos</span>
          </button>
        </div>
      </form>
    </section>
  )
}