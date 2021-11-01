import {useEffect, useState} from "react";
import MenuList from '../menulist/MenuList';
import "./menu.scss";
import { coldMenu, hotMenu, flavoursMenu } from "../../menuData";

export default function Menu() {

    const [selected, setSelected] = useState("hot");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "hot",
            title: "Hot",
        },
        {
            id: "cold",
            title: "Cold",
        },
    ];

    useEffect(()=> {
        switch(selected){
            case "hot":
                setData(hotMenu);
                break;
            case "cold":
                setData(coldMenu);
                break;
            default:
                setData(hotMenu);
        }
    },[selected])

    return (
        <div className="menu" id="menu">
            <div className="wrapper">
                <h1>Cabin Coffee Menu</h1>
                <p>We have an amazing selection of coffee and flavours just right for any occasion. <span>Have a browse for yourself!</span></p>
                <ul>
                    {list.map(item=>(
                        <MenuList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                    ))}
                </ul>
            </div>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <div className="text-wrapper">
                            <h3>{d.title}</h3>
                            <p>{d.paragraph}</p>
                            <ul>
                                <li><span>Energy</span> 143kcal</li>
                                <li><span>Caffeine</span> 150mg</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
