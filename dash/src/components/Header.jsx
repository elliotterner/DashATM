import React from 'react'
import { NavLink, Link} from "react-router-dom"
import FormButton from './FormButton'
export default function Header() {

    return (
    <header>
        <Link 
            className="site-name" 
            to="/">
            Dash ATM Services
        </Link>
        <nav className='NavLinks'>
            <NavLink 
                className='HeaderLinks'
                to="placements">
                Placement
            </NavLink>
            <NavLink 
                className='HeaderLinks'
                to="processing">
                Processing
            </NavLink>
            <NavLink 
                className='HeaderLinks'
                to='eventATMs'>
                Event ATMs
            </NavLink>
            <NavLink 
                className='HeaderLinks'
                to='about'>
                    About
            </NavLink>
            <NavLink 
                className='HeaderLinks'
                to='contact'>
                Contact Us
            </NavLink>
            <FormButton text = "Request ATM"
                        size = "22px 40px"
                        buttonColor = "white"
                        textColor = "#267eb5"/>
        </nav>
    
    </header>
    
  )
}
