import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import {Fragment} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {Container} from  'react-bootstrap'
// import { Navbar } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </Fragment>
  )
} 

export default MyApp
