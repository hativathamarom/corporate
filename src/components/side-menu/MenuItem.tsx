import { NavLink } from "react-router-dom"
import { MenuItemProps } from "../../types/menu-item"
import style from "./MenuItem.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { useContext, useState } from "react";
import { SideMenuContext } from "../../contexts/SideMenuContext";

export default function MenuItem(props: MenuItemProps) {
    
    const sideMenuContext = useContext(SideMenuContext)

    const [isMouseEnter ,setIsMouseEnter] = useState(false)
    
    return (
        <NavLink
            className={`${style["menu-link"]}`}
            to={props.path}
            onMouseEnter={()=> setIsMouseEnter(true)}
            onMouseLeave={()=> setIsMouseEnter(false)}
            onClick={()=>{sideMenuContext?.setIsOpen(false)}}
        >
            <div> {props.alias} </div>
            {
                isMouseEnter && <div> <IoIosArrowBack /> </div>
            }
            
        </NavLink>
    )
}