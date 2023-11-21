

import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";
import style from "./BalnamPage.module.css"

export default function BalnamPage() {
    return (
        <div className={style["container"]}>
            <PageNavigation items={[
                {text:'על היחידה' ,to:'/balnam/info'},
                {text:'סרטוני תדמית' ,to:'/balnam/video'},
                {text:'כתבות' ,to:'/balnam/articles'}
            ]} />
            <Outlet/>
        </div>
    )
}