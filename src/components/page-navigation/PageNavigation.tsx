import { NavLink } from "react-router-dom"
import style from "./PageNavigation.module.css"
import { PageMenuProps } from "../../types/page-menu"

export default function PageNavigation(props:PageMenuProps) {
    return (
        <nav className={style["page-navigation"]}>
            {
                props.items.map(item => {
                    return (
                        <NavLink to={item.to}> {item.text} </NavLink>
                    )
                })
            }
        </nav>
    )
}