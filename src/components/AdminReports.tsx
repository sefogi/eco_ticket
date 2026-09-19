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

  return (
    <section className="admin-reports">
      <div className="admin-reports-header">
        <h1>Panel de Administrador</h1>
        <p>Reportes y estadísticas del sistema</p>
      </div>

      <div className="report-cards">
        <div className="report-card">
          <h3>Total de eventos</h3>
          <p>{totalEvents}</p>
        </div>

        <div className="report-card">
          <h3>Precio promedio</h3>
          <p>${averagePrice.toLocaleString('es-CO')}</p>
        </div>

        <div className="report-card">
          <h3>Ciudades</h3>
          <p>{cities.size}</p>
        </div>
      </div>

      <div className="report-section">
        <h2>Eventos por ciudad</h2>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eventsByCity}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="city" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Bar dataKey="events" name="Eventos" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="report-section">
        <h2>Eventos registrados</h2>

        <div className="table-container">
          <table>
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
    </section>
  )
}

export default AdminReports