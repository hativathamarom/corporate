import InfoPage from "../../../layouts/pages/InfoPage";
import symbol from "../../../assets/lotar/lotar-symbol.png"
import style from "./LotarInfoPage.module.css"

export default function LotarInfoPage() {
    return (
        <div className={style["info-container"]}>
            <InfoPage
                title={`לוט"ר`}
                paragraph={`יחידת הלוט"ר יחידה מובחרת אשר מתמחה בלוחמה בטרור ומבצעת משימות מיוחדות של צליפה וחילוץ ממצבי קיצון.
            היחידה מורכבת מלוחמים מצטיינים שעברו אימונים מחמירים ומתמחים בקישורים טקטיים וטכנולוגים מתקדמים.
            השירות ביחידת הלוט"ר מספר הזדמנות לתרום לביטחון הלאומי בדרך יוצאת דופן תוך השתתפות במשימות מורכבות באזורים מאוימים.`}
                symbol={symbol}
            />
        </div>
    )
}