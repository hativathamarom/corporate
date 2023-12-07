import YizkorCardList from "../../../components/yizkor/yizkor-card-list/YizkorCardList";
import style from "./ThnihaHatasaYizkorPage.module.css"
import { thnihaHatasaListData } from "./ThnihaHatasaListData"

export default function ThnihaHatasaYizkorPage (){
    return (
        <div className={style["yizkor-container"]}>
            <YizkorCardList 
                yizkorCardList={thnihaHatasaListData}
            />
        </div>
    )
}