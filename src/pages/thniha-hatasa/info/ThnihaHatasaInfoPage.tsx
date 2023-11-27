import symbol from "../../../assets/thniha-hatasa/symbol.png";
import InfoPage from "../../../layouts/pages/info/InfoPage"
import style from "./ThnihaHatasaInfoPage.module.css"

export default function ThnihaHatasaInfoPage() {
    return (
        <div className={style["info-container"]}>
            <InfoPage
                title="צניחה והטסה"
                paragraph={`
                יחידה הצניחה וההטסה היא יחידה דינמית ומתקדמת במתמחה במשימות מורכבות
                . החיילים ביחידה זו עוברים הכשרות מקיפות ומאתגרות שמטרתן להכין אותם למבצעים בתנאים משתנים
                . העבודה השוטפת ביחידה כוללת אימוני צניחה, ניווט אווירי והכשרות בטכניקות מיוחדות להטסה ולצניחה
                . השירות ביחידה זו מבטיח חוויה מעשירה ומאתגרת, עם דגש על פיתוח כישורים מקצועיים גבוהים ותחושת תרומה חשובה לביטחון המדינה.
                `}
                symbol={symbol}
            />
        </div>
    )
}