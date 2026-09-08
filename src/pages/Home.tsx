import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import type { SlideItem } from '../components/Slider'

import image1 from '../assets/slide1.png'

const imagenes: SlideItem[] = [
  { id: 1, url: image1, alt: "Imagen 1" }
]

function Home() {
  return (
    <>
      <Navbar />
      <main className="container-fluid px-0 pt-1 pb-5" id="eventos">
        <Slider imagenes={imagenes} />
      </main>
    </>
  )
}

export default Home