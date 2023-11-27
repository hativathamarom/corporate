import symbol from "../../../assets/haspaka-hatasa/symbol.png"
import InfoPage from "../../../layouts/pages/info/InfoPage"
import style from "./HaspakaHatasaInfoPage.module.css"

export default function HaspakaHatasaInfoPage() {
    return (
        <div className={style["info-container"]}>
            <InfoPage
                title="אספקה בהיטס"
                paragraph={`
                    יחידת אספקה בהטס מתמחה בלוגיסטיקה והספקת משאבים קריטים לכל חלקי הצבא.
                    היחידה מהווה חלק חיוני בתפעול ותחזוקה של מערכות הנשק והציוד ומבטיחה שהחיילים יהיו מצויידים בכל מה שנדרש למשימותיהם.
                    היחיילים ביחידה זאת מקבלים הכשרה מקצועית על ניהול האספקה לוגיסטיקה ותיפעול משאבים תוך שימת דגש על יעילות ודיוק.
                    השירות ביחידה מציע הזדמנות לקחת חלק בליבה הלוגיסטית של הצבא תוך תרומה עצומה לתפקוד היום יומי ולהצלחת משימות צה"ל`}
                symbol={symbol}
            />
        </div>
    )
}