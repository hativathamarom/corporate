
import style from "./HaspakaHatasaYizkorPage.module.css"
import YizkorCardList from "../../../components/yizkor/yizkor-card-list/YizkorCardList"
import { haspakaHatasaYizkorListData } from "./haspakaHatasaYizkorListData"


export default function HaspakaHatasaYizkorPage() {
    return (
        <div className={style["yizkor-container"]}>
            <YizkorCardList 
                yizkorCardList={haspakaHatasaYizkorListData}
            />
        </div>
    )
}