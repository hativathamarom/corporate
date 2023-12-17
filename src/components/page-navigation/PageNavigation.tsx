import { NavLink } from "react-router-dom"
import style from "./PageNavigation.module.css"
import { PageMenuProps } from "../../types/page-menu"
import { RxHamburgerMenu } from "react-icons/rx"
import { useContext } from "react"
import { SideMenuContext } from "../../contexts/SideMenuContext"
import { v4 } from "uuid"

export default function PageNavigation(props: PageMenuProps) {

    const sideMenuContext = useContext(SideMenuContext)

    return (
        <nav className={style["page-navigation"]}>
            <div className={style["menu"]}>
                <RxHamburgerMenu
                    size={'30px'}
                    onClick={() => { sideMenuContext?.setIsOpen(true) }}
                />
            </div>
            <div className={style["menu-items"]}>
                {
                    props.items.map(item => {
                        return (
                            <div key={v4()} className={style["menu-item"]}>
                                <NavLink to={item.to} end>
                                    {item.text}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
            <div>
            </div>
        </nav>
    )
}