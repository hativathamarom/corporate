import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";
import style from "./LotarPage.module.css"

export default function LotarPage() {
    return (
        <div className={style["container"]}>
            <PageNavigation items={[
                {text:'על היחידה' ,to:'/lotar/info'},
                {text:'סרטוני תדמית' ,to:'/lotar/video'},
                {text:'כתבות' ,to:'/lotar/articles'}
            ]} />
            <Outlet/>
        </div>
    )
}