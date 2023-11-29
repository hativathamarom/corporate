import symbol from "../../../assets/oketz/symbol.png"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import style from "./OketzInfoPage.module.css"

export default function OketzInfoPage() {
    return (
        <div className={style["info-container"]}>
            <InfoSlide
                title="עוקץ"
                paragraph={
                           `יחידת עוקץ מפעילה כלבים מיומנים לצד לוחמים ולוחמות לביצוע משימות מורכבות ומיוחדות בשגרה ובחירום.
                            לוחמי ולוחמות הקומנדו יחד עם הכלבים מבצעים פעילויות עצמאיות לצד  או בשיתוף פעולה עם יחידות אחרות.
                            הכלבים והלוחמים עוברים אימונים מתקדמים תוך שמירה על סטנדרטים גבוהים של כושר גופני, נפשי ומקצועיות. 
                            זהו אתגר מיוחד המחייב תקשורת מצוינת עם הכלבים והבנה עמוקה של התנהגותם.
                            למתגייסים ליחידה ניתנת ההזדמנות לשרת באחת היחידות המובילות בצה"ל לצד חוויית מסע אישי של צמיחה והתפתחות.
                            `
                }
                symbol={symbol}
            />
        </div>
    )
}