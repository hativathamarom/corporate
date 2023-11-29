import symbol from "../../../assets/bet-sefer-yeri/symbol.png"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import style from "./BetSeferYeriInfoPage.module.css"

export default function BetSeferYeriInfoPage() {
    return (
        <div className={style["info-container"]}>
            <InfoSlide
                title="בית ספר לירי"
                paragraph={`
                            בית הספר לירי הוא מוסד מקצועי ומתקדם המספק אימוני ירי ברמה גובהה לחיילים ביחידות השונות בצה"ל.
                            התוכנית הלימודית בבית הספר כוללת את כל הבטי הירי - מהכרת סוגי נשק שונים ,טכניקות ירי מדויקות ,שליטה בנשק במצבים שונים ועד לירי תחת לחץ ובתנאי שטח משתנים.
                            בית הספר מבצע משימה קריטית - הכשרת הלוחמים והחיילים לירי מקצועי ויעיל בכלים השונים במהלך משימות קרביות.
                            בכל שנה עוברים בבית הספר יחידות וחיילים רבים על מנת לקבל הכשרה ולהתמקצע בירי.
                            השתתפות בקורס \ הכשרה בבית הספר לירי מהווה הזדמנות לפתח קישורים חיונים בתחום הקרב ולהיות חלק מעמוד השדרה של הלחימה בצה"ל`}
                symbol={symbol}
            />
        </div>
    )
}