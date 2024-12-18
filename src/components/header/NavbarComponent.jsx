import React from 'react'
import './NavbarComponent.scss' 
import {Link} from 'react-router-dom'

const NavbarComponent = () => {

    return (<React.Fragment>
            <div className='NavbarComponent'>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                        <img className='logo' src={"https://cebudailynews.inquirer.net/files/2021/02/comelec-logo-620x620-1.png"} alt="Bulma: a modern CSS framework based on Flexbox"/>
                        </a>
                        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">
                                Home
                            </Link> 
                            <Link to="/register" className="navbar-item">
                                Register
                            </Link>
                        </div>
                        <div className="navbar-end">
                        </div>
                    </div>
                </nav>
            </div>
    </React.Fragment>)
}

export default NavbarComponent;