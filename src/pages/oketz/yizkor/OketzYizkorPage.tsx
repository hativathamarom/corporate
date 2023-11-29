
import style from "./OketzYizkorPage.module.css"
import YizkorCardList from "../../../components/yizkor/yizkor-card-list/YizkorCardList"
import { oketzYizkorListData } from "./oketzYizkorListData"


export default function OketzYizkorPage() {
    return (
        <div className={style["yizkor-container"]}>
            <YizkorCardList 
                yizkorCardList={oketzYizkorListData}
            />
        </div>
    )
}