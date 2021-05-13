import {Fragment} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
// import toNum from '../helpers/toNum'
import Link from 'next/link'

export default function NavBar(){
    return(

      
        <Navbar id="nav" expand="lg" text-white>
            <Link href="/">
                <a className="navbar-brand">Covid-19 Tracker</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Link href='/allCountries'>
                        <a className="nav-link" role="button">Infected Countries</a>
                    </Link>
                    <Link href='/search'>
                        <a className="nav-link" role="button">Find Country</a>
                    </Link>
                    <Link href='/topTen'>
                        <a className="nav-link" role="button">Top 10 Countries</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>        
        </Navbar>        
    )
}