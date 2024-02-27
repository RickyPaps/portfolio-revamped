import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6wug1nq',
        'template_u1cb177',
        refForm.current,
        'DsnuKK47qQSTAwzg_'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('There seems to have been an error.')
        }
      )
  }

  useEffect(() => {
    let Timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(Timeout)
    }
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              id={15}
              strArray={"Contact Me".split("")}
            />
          </h1>
          \
          <p>
            As a passionate frontend developer, I specialize in crafting
            captivating digital experiences that blend creativity with
            functionality. Whether it's designing sleek user interfaces or
            optimizing website performance, I bring a meticulous approach to
            every project. Let's collaborate to elevate your online presence and
            captivate your audience.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li style={{ gridArea: 'name' }}>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li style={{ gridArea: 'email' }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li style={{ gridArea: 'subject' }}>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li style={{ gridArea: 'message' }}>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li style={{ gridArea: '4 / 4', textAlign: 'end' }}>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="info-map">
        Ricky Papini,
        <br />
        France,
        <br />
        Morzine 74110
        <br />
        <span>rickypapini@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[46.18288301765849, 6.702056421275244]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[46.18288301765849, 6.702056421275244]}>
            <Popup>I live here, Come over for a cup of coffee!</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
