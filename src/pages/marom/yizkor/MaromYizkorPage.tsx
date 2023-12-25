
import style from "./MaromYizkorPage.module.css"
import YizkorCardList from "../../../components/yizkor/yizkor-card-list/YizkorCardList"
import { maromYizkorListData } from "./maromYizkorListData"
import PageNavigation from "../../../components/page-navigation/PageNavigation"
import { BiArrowBack } from "react-icons/bi";

export default function MaromYizkorPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'חזור', to: '/' },
            ]} />
            <div className={style["yizkor-container"]}>
                <YizkorCardList
                    yizkorCardList={maromYizkorListData}
                />
            </div>
        </>

    )
}