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
                    <li><a href="#footer">Home</a></li>
                    <li><a href="#footer">Seasonal</a></li>
                    <li><a href="#footer">Menu</a></li>
                </ul>
                <ul>
                    <li id="header">DOCS</li>
                    <li><a href="#footer">Menu</a></li>
                    <li><a href="#footer">Nutrition</a></li>
                    <li><a href="#footer">Allergy</a></li>
                </ul>
                <ul>
                    <li id="header">PRIVACY</li>
                    <li><a href="#footer">Privacy policy</a></li>
                    <li><a href="#footer">Terms and Conditions</a></li>
                </ul>
            </div>
            <h2>Cabin Coffee House &copy; 2021</h2>
        </div>
    )
}
