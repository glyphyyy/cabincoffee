import "./burgermenu.scss"

export default function BurgerMenu({ burgerMenuOpen, setBurgerMenuOpen }) {
    return (
        <div className={"burgermenu " + (burgerMenuOpen && "active")}>
            <ul>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <a href="#seasonal">Seasonal</a>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <a href="#menu">Menu</a>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <a href="#home">Nutrition</a>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <a href="#home">Allergy</a>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <a href="#home">Privacy</a>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <a href="#home">Terms</a>
                </li>
            </ul>
        </div>
    )
}
