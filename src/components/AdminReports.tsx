import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

type ReportEvent = {
  id: number
  name: string
  location: string
  date: string
  price: number
}

const events: ReportEvent[] = [
  {
    id: 1,
    name: 'Concierto Eco Fest',
    location: 'Cali',
    date: '2026-10-15',
    price: 50000,
  },
  {
    id: 2,
    name: 'Festival Verde',
    location: 'Bogotá',
    date: '2026-10-20',
    price: 35000,
  },
  {
    id: 3,
    name: 'Feria Ambiental',
    location: 'Cali',
    date: '2026-11-05',
    price: 25000,
  },
  {
    id: 4,
    name: 'Eco Music',
    location: 'Medellín',
    date: '2026-11-12',
    price: 45000,
  },
]

function AdminReports() {
  const totalEvents = events.length

  const averagePrice =
    events.reduce((total, event) => total + event.price, 0) / totalEvents

  const cities = new Set(events.map((event) => event.location))

  const eventsByCity = Object.values(
    events.reduce(
      (acc, event) => {
        if (!acc[event.location]) {
          acc[event.location] = {
            city: event.location,
            events: 0,
          }
        }

        acc[event.location].events += 1

        return acc
      },
      {} as Record<string, { city: string; events: number }>
    )
  )

  const stats = [
    { label: 'Total de eventos', value: totalEvents, icon: 'bi bi-calendar-event' },
    {
      label: 'Precio promedio',
      value: `$${averagePrice.toLocaleString('es-CO')}`,
      icon: 'bi bi-cash-stack',
    },
    { label: 'Ciudades', value: cities.size, icon: 'bi bi-geo-alt' },
  ]

  return (
    <section className="card shadow-sm border-0 admin-reports mt-4">
      <div className="card-body p-4 p-lg-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4">
          <div>
            <p className="text-success fw-semibold text-uppercase mb-1 small-letter-spacing">
              Resumen
            </p>
            <h2 className="h4 mb-0 text-dark fw-bold">Estadísticas del sistema</h2>
          </div>

          <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
            Actualizado hoy
          </span>
        </div>

        <div className="row g-3 mb-4">
          {stats.map((stat) => (
            <div key={stat.label} className="col-md-4">
              <div className="card border-0 h-100 admin-stat-card">
                <div className="card-body d-flex align-items-center gap-3 p-3">
                  <div className="admin-stat-icon bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                    <i className={stat.icon}></i>
                  </div>

                  <div>
                    <p className="text-muted mb-1 admin-stat-label">{stat.label}</p>
                    <h3 className="admin-stat-value mb-0">{stat.value}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="report-section">
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h3 className="h5 mb-0 text-dark fw-bold">Eventos por ciudad</h3>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={eventsByCity}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="city" tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: 'rgba(25, 135, 84, 0.05)' }} />
                <Bar dataKey="events" name="Eventos" fill="#198754" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="report-section mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h3 className="h5 mb-0 text-dark fw-bold">Eventos registrados</h3>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0 admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Evento</th>
                  <th>Ubicación</th>
                  <th>Fecha</th>
                  <th>Precio</th>
                </tr>
              </thead>

              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.name}</td>
                    <td>{event.location}</td>
                    <td>{event.date}</td>
                    <td>${event.price.toLocaleString('es-CO')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminReports