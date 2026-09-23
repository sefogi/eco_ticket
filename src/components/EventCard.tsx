import type { Event } from '../types/event'

export type EventCardProps = {
    event: Event
}

export default function EventCard({ event }: EventCardProps) {
    const parsedDate = event.date ? new Date(event.date) : null
    const isValidDate = parsedDate && !Number.isNaN(parsedDate.getTime())

    const day = isValidDate ? parsedDate.getDate() : '—'
    const month = isValidDate
        ? new Intl.DateTimeFormat('es-CO', { month: 'short' })
            .format(parsedDate)
            .replace('.', '')
            .toUpperCase()
        : 'DATE'

    return (
        <article className="card h-100 overflow-hidden rounded-3 border-0 shadow-sm event-card">
            <div className="position-relative">
                <img
                    src={event.image}
                    className="card-img-top event-card-image"
                    alt={`Imagen del evento ${event.title}`}
                />

                <div className="event-date-badge">
                    <span className="event-date-month">{month}</span>
                    <span className="event-date-day">{day}</span>
                </div>
            </div>

            <div className="card-body d-flex gap-3 p-3">
                <div className="flex-grow-1">
                    <h3 className="h6 mb-2 fw-bold text-dark text-uppercase">
                        {event.title}
                    </h3>

                    <p className="mb-1 text-secondary">
                        {event.organizer}
                    </p>

                    <p className="mb-0 text-secondary">
                        {event.city}
                    </p>
                </div>
            </div>
        </article>
    )
}