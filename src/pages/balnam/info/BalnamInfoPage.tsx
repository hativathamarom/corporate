import InfoPage from "../../../layouts/pages/InfoPage";
import symbol from "../../../assets/balnam/balnam-symbol.png"
import style from "./BalnamInfoPage.module.css"

export default function BalnamInfoPage() {
    return (
        <div className={style["info-container"]}>
        <InfoPage
            title={`בלנ"ם`}
            paragraph={`יחידת בית הספר לנהיגה מבצעית יחידה מרכזית המספקת אימונים מקצועיים ומתקדמים בתחום הנהיגה המבצעית.
             חיילי היחידה מקבלים הכשרה יסודית בנהיגת רכבי קרב,
             נהיגה בתנאי שטח וטקטיקות נהיגה מתקדמות שמותאמות לסביבות לחימה משתנות חשיבות של יחידה זאת בצב"א היא עצומה
             שכן היא מכשירה נהגים לפעול בהפקטיביות ובטיחות בתנאים קרביים ומאתגרים
             השירות בבית הספר לנהיגה מבצעית מבטיח חוויה מעשירה ומקצועית
             המקנה קישורים יחודיים וחיונים לתפקוד יעיל ובטוח במסגרת משימות קרביות ולוגיסטיות`}
            symbol={symbol}
        />
        </div>
    )
}