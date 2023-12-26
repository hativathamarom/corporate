
import { Outlet } from "react-router-dom"
import SideMenu from "../../components/side-menu/SideMenu"

import style from "./Main.module.css"
import { useContext } from "react"
import { SideMenuContext } from "../../contexts/SideMenuContext"

export default function Main() {
    
    const sideMenuContext = useContext(SideMenuContext)

    return (
        <main className={`${style["main-container"]} ${sideMenuContext?.isOpen ? style["main-container-open"] : style["main-container-close"]}`}>
            <div className={sideMenuContext?.isOpen ? style["left-side-menu-open"] : style["left-side-menu-close"]}>
                <SideMenu />
            </div>
            <div className={style["page-container"]}>
                <Outlet />
            </div>
        </main>
    )
}