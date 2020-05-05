import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {

    openNav = () => {
        const nav = document.querySelector('.navbar ul')

        nav.classList.toggle('slide')
    }

    render() {
        return (
            <div>
                <div className="navbar">

                    <p className="title-navbar"><Link to="/">Info Covid19</Link></p>

                    <ul className="list-navbar">
                        <li>
                            <Link to="/">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/world">Dunia</Link>
                        </li>
                        <li>
                            <Link to="/about">Tentang</Link>
                        </li>
                    </ul>

                    <div className="toggle-menu">
                        <input type="checkbox" onClick={this.openNav} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
        );
    }
}

export default Navbar;
