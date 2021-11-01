import React from 'react'
import "./seasonal.scss"

export default function Seasonal() {
    return (
        <div className="seasonal" id="seasonal">
            <div className="box-bg"><img src="assets/logo-bg-bright.svg" alt="" /></div>
            <div className="container">
                <div className="box">
                    <img src="assets/seasonal-2.svg" alt="" />
                    <h1>Toasted Cinnamon Cappuccino.</h1>
                    <h2>£3.85</h2>
                </div>
                <div className="box">
                    <img src="assets/seasonal-1.svg" alt="" />
                    <h1>Dark Chocolate Orange Mocha.</h1>
                    <h2>£3.85</h2>
                </div>
                <div className="box">
                    <img src="assets/seasonal-3.svg" alt="" />
                    <h1>Hazelnut Toffee Crunch Latte.</h1>
                    <h2>£3.85</h2>
                </div>
            </div>
        </div>
    )
}