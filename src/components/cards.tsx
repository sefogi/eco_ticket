import eventImage from '../assets/Slider2.jpg'
import eventImageTwo from '../assets/slide1.png'
import eventImageThree from '../assets/slider3.jpg'

export type EventCardProps = {
	title: string
	organizer: string
	city: string
	category: string
	date: string
	day: string
	month: string
	weekday: string
	image: string
}

function EventCard({ title, organizer, city, day, month, weekday, image }: EventCardProps) {
	return (
		<article className="card h-100 overflow-hidden rounded-3 border-0 shadow-sm">
			<img
				src={image}
				className="card-img-top event-card-image"
				alt={`Imagen del evento ${title}`}
			/>
			<div className="card-body d-flex gap-3 p-3">
				<div className="flex-grow-1">
					<h3 className="h6 mb-2 fw-bold text-dark text-uppercase">{title}</h3>
					<p className="mb-1 text-secondary">{organizer}</p>
					<p className="mb-0 text-secondary">{city}</p>
				</div>
				<div className="text-center text-success lh-sm">
					<strong className="d-block fs-4">{day}</strong>
					<span className="d-block small fw-bold text-uppercase">{month}</span>
					<span className="d-block small">{weekday}</span>
				</div>
			</div>
		</article>
	)
}

export const events: EventCardProps[] = [
	{
		title: 'Concierto Rock Ecológico',
		organizer: 'Eco Ticket',
		city: 'Cali',
		category: 'music',
		date: '2026-06-14',
		day: '14',
		month: 'Jun',
		weekday: 'Sáb',
		image: eventImage,
	},
	{
		title: 'Festival Música y Naturaleza',
		organizer: 'Eco Eventos',
		city: 'Medellín',
		category: 'music',
		date: '2026-06-22',
		day: '22',
		month: 'Jun',
		weekday: 'Dom',
		image: eventImageTwo,
	},
	{
		title: 'Carrera Por el Rio Tuluá',
		organizer: 'Eco-ticket',
		city: 'Tuluá',
		category: 'sports',
		date: '2026-07-05',
		day: '05',
		month: 'Sep',
		weekday: 'Sáb',
		image: eventImageThree,
	},
]

export default function EventCards({ filteredEvents = events }: { filteredEvents?: EventCardProps[] }) {
	return (
		<section className="container-fluid px-3 px-md-5 py-4" aria-labelledby="events-title">
			<h2 id="events-title" className="mb-3 fs-4 fw-bold text-dark">Eventos destacados</h2>
			<div className="row g-4">
				{filteredEvents.map((event) => (
					<div className="col-12 col-md-6 col-lg-4" key={event.title}>
						<EventCard {...event} />
					</div>
				))}
				{filteredEvents.length === 0 && (
					<div className="col-12">
						<p className="mb-0 text-center text-secondary">No encontramos eventos con esos filtros.</p>
					</div>
				)}
			</div>
		</section>
	)
}
