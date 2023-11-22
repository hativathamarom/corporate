import { NavLink } from "react-router-dom"
import style from "./PageNavigation.module.css"
import { PageMenuProps } from "../../types/page-menu"
import { RxHamburgerMenu } from "react-icons/rx"
import { useContext } from "react"
import { SideMenuContext } from "../../contexts/SideMenuContext"

export default function PageNavigation(props: PageMenuProps) {

    const sideMenuContext = useContext(SideMenuContext)

    return (
        <nav className={style["page-navigation"]}>
            <div className={style["side-menu"]}>
                <span>
                    <RxHamburgerMenu
                        size={'30px'}
                        onClick={()=>{sideMenuContext?.setIsOpen(true)}}
                    />
                </span>
            </div>
            <div>
            {
                props.items.map(item => {
                    return (
                        <NavLink to={item.to}> {item.text} </NavLink>
                    )
                })
            }
            </div>
            <div>

            </div>
        </nav>
    )
}