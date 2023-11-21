import { NavLink } from "react-router-dom"
import { MenuItemProps } from "../../types/menu-item"
import style from "./MenuItem.module.css"
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function MenuItem(props: MenuItemProps) {
    const [isMouseEnter ,setIsMouseEnter] = useState(false)
    
    return (
        <NavLink
            className={`${style["menu-link"]}`}
            to={props.path}
            onMouseEnter={()=> setIsMouseEnter(true)}
            onMouseLeave={()=> setIsMouseEnter(false)}
        >
            <div> {props.alias} </div>
            {
                isMouseEnter && <div> <IoIosArrowBack /> </div>
            }
            
        </NavLink>
    )
}