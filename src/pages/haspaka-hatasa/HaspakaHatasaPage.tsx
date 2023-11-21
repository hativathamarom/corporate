import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";
import style from "./HaspakaHatasaPage.module.css"

export default function HaspakaHatasaPage() {
    return (
        <div className={style["container"]}>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/haspaka-hatasa/info' },
                { text: 'סרטוני תדמית', to: '/haspaka-hatasa/video' },
                { text: 'כתבות', to: '/haspaka-hatasa/articles' }
            ]} />
            <Outlet />
        </div>
    )
}