import React from 'react'
import "./navbar.scss"

export default function Topbar({ burgerMenuOpen, setBurgerMenuOpen }) {
    return (
        <div className={"topbar " + (burgerMenuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"><img src="assets/logo.svg" alt="" /></a>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#seasonal">Seasonal</a></li>
                        <li><a href="#menu">Menu</a></li>
                    </ul>
                </div>
                <div className="right">
                    <img src="assets/pin.svg" alt="" />
                    <button><a href="#footer">Find us</a></button>
                    <div className="hamburger" onClick={()=>setBurgerMenuOpen(!burgerMenuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
