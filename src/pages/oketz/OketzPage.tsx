import style from "./OketzPage.module.css"
import PageNavigation from "../../components/page-navigation/PageNavigation"
import { Outlet } from "react-router-dom"


export default function OkethPage() {
    return (
        <div className={style["container"]}>
            <PageNavigation items={[
                {text:'על היחידה' ,to:'/oketz/info'},
                {text:'סרטוני תדמית' ,to:'/oketz/video'},
                {text:'כתבות' ,to:'/oketz/articles'}
            ]} />
            <Outlet/>
        </div>
    )
}