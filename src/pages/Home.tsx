import { useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Buscador, { type SearchFilters } from '../components/Buscador'
import EventCards, { events } from '../components/cards'
import type { EventCardProps } from '../components/cards'
import Footer from '../components/Footer'
import type { SlideItem } from '../components/Slider'

import image1 from '../assets/slide1.png'
import image2 from '../assets/slider2.jpg'
import image3 from '../assets/slider3.jpg'

const imagenes: SlideItem[] = [
  { id: 1, url: image1, alt: "Imagen 1" },
  { id: 2, url: image2, alt: "Imagen 2" },
  { id: 3, url: image3, alt: "Imagen 3" }
]

function Home() {
  const [filteredEvents, setFilteredEvents] = useState<EventCardProps[]>(events)

  function handleSearch({ city, category, date, query }: SearchFilters) {
    const normalize = (value: string) =>
      value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    setFilteredEvents(events.filter((event) => {
      const matchesCity = !city || normalize(event.city) === normalize(city)
      const matchesCategory = !category || event.category === category
      const matchesDate = !date || event.date === date
      const searchableText = normalize(`${event.title} ${event.organizer} ${event.city}`)
      const matchesQuery = !query || searchableText.includes(normalize(query))

      return matchesCity && matchesCategory && matchesDate && matchesQuery
    }))
  }

  return (
    <>
      <Navbar />
      <main className="container-fluid px-0 pt-1 pb-5" id="eventos">
        <Slider imagenes={imagenes} />
        <Buscador onSearch={handleSearch} />
        <EventCards filteredEvents={filteredEvents} />
      </main>
      <Footer />
    </>
  )
}

export default Home