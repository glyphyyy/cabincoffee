import "./menulist.scss"

export default function MenuList({id,title,active,setSelected}) {
    return (
        <li className={active ? "menulist active" : "menulist"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
