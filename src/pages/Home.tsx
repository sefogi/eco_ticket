import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Buscador from '../components/Buscador'
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
  return (
    <>
      <Navbar />
      <main className="container-fluid px-0 pt-1 pb-5" id="eventos">
        <Slider imagenes={imagenes} />
        <Buscador />
      </main>
      <Footer />
    </>
  )
}

export default Home