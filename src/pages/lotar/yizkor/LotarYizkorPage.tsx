
import style from "./LotarYizkorPage.module.css"
import YizkorCardList from "../../../components/yizkor/yizkor-card-list/YizkorCardList"
import { lotarYizkorListData } from "./lotarYizkorListData"


export default function LotarYizkorPage() {
    return (
        <div className={style["yizkor-container"]}>
            <YizkorCardList 
                yizkorCardList={lotarYizkorListData}
            />
        </div>
    )
}