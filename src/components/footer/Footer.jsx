import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <img src="assets/logo.svg" alt="" />
            <h1>CABIN COFFEE HOUSE</h1>
            <div className="location">
                <img src="assets/pin.svg" alt="" />
                <p>137 Northumberland St, <span>Newcastle upon Tyne NE1 7AG</span></p>
            </div>
            <div className="links">
                <ul>
                    <li id="header">THE CABIN</li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Seasonal</a></li>
                    <li><a href="">Menu</a></li>
                </ul>
                <ul>
                    <li id="header">DOCS</li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Nutrition</a></li>
                    <li><a href="">Allergy</a></li>
                </ul>
                <ul>
                    <li id="header">PRIVACY</li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                </ul>
            </div>
            <h2>Cabin Coffee House &copy; 2021</h2>
        </div>
    )
}
