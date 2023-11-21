
import { Outlet } from "react-router-dom"
import SideMenu from "../../components/side-menu/SideMenu"

import style from "./Main.module.css"

export default function Main() {
    return (
        <main className={style["main-container"]}>
            <div className={style["left-side-menu"]}>
                <SideMenu />
            </div>
            <div className={style["page-container"]}>
                <Outlet />
            </div>
        </main>
    )
}