
import style from "./BalnamYizkorPage.module.css"
import YizkorCardList from "../../../components/yizkor/yizkor-card-list/YizkorCardList"
import { balnamYizkorListData } from "./balnamYizkorListData"


export default function BalnamYizkorPage() {
    return (
        <div className={style["yizkor-container"]}>
            <YizkorCardList 
                yizkorCardList={balnamYizkorListData}
            />
        </div>
    )
}