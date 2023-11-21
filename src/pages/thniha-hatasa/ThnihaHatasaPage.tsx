import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";
import style from "./ThnihaHatasaPage.module.css"
export default function ThnihaHatasaPage() {
    return (
        <div className={style["container"]}>
            <PageNavigation items={[
                {text:'על היחידה' ,to:'/thniha-hatasa/info'},
                {text:'סרטוני תדמית' ,to:'/thniha-hatasa/video'},
                {text:'כתבות' ,to:'/thniha-hatasa/articles'}
            ]} />
            <Outlet/>
        </div>
    )
}