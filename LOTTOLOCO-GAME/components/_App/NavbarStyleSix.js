import React, { useState } from "react";
import Link from '@/utils/ActiveLink';
import * as Icon from 'react-feather';

const NavbarStyleSix = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom navbar-style-three">
            <div className="startp-nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/it-startup">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Home <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    
                                </li>

                                

                                

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Blog <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/blog-1" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-4" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-5" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid 3</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-6" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar 3</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-details" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">
                            <Link href="/login">
							    <a className="btn btn-primary">CONNECT WALLET</a>
                            </Link>
						</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavbarStyleSix;