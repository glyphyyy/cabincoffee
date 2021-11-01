import React from 'react'
import "./hero.scss"

export default function Hero() {
    return (
        <div className="hero" id="home">
            <div className="wrapper">
                <div className="illustration">
                    <img src="assets/girl-bg.svg" alt="" />
                    <img id="head" src="assets/girl-head.svg" alt="" />
                    <img id="coffee1" src="assets/coffee-steam-1.svg" alt="" />
                    <img id="coffee2" src="assets/coffee-steam-2.svg" alt="" />
                    <img id="coffee3" src="assets/coffee-steam-3.svg" alt="" />
                </div>
                <div className="text">
                    <h1>Great <span>Coffee</span> everyday of <span id="new-line">the week!</span></h1>
                    <p>
                        Pop in today to try our latest autumn flavours including our infamous
                        <span>Hazelnut Toffee Latte or our Toasted Cinnamon Cappuccino.</span>
                    </p>
                    <button>Find out more.</button>
                    <p id="lower">Never been to Cabin Coffee House? <a href="#footer">Find us here.</a></p>
                </div>
            </div>
        </div>
    )
}
