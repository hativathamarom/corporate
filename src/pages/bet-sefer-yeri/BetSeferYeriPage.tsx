import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";
import style from "./BetSeferYeriPage.module.css"


export default function BetSeferYeriPage() {
    return (
        <div className={style["container"]}>
            <PageNavigation items={[
                {text:'על היחידה' ,to:'/bet-sefer-yeri/info'},
                {text:'סרטוני תדמית' ,to:'/bet-sefer-yeri/video'},
                {text:'כתבות' ,to:'/bet-sefer-yeri/articles'}
            ]} />
            <Outlet/>
        </div>
    )
}