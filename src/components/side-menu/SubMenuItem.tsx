
import { NavLink } from "react-router-dom"
import { SubMenuItemProps } from '../../types/menu-item'

import style from "./SubMenuItem.module.css"

export default function SubMenuItem(props: SubMenuItemProps) {
    return (
        <NavLink className={style["sub-link"]} to={props.path}>
            <div>
                {props.alias}
            </div>
        </NavLink>
    )
}