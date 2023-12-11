import { useState } from "react"
import symbol from "../../../assets/oketz/symbol.png"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import style from "./OketzInfoPage.module.css"

import src from "../../../assets/oketz/oketz2.jpeg"

import srcCompress from "../../../assets/oketz/oketz2-compress.jpeg"

export default function OketzInfoPage() {

    const [loaded ,setLoaded] = useState(false)

    return (
        <div
            onLoad={()=> {
                console.log(`div was loaded`);
                setLoaded(true)
            }}
            className={style["info-container"]}
            style={{backgroundImage:`url(${loaded ? src : srcCompress})`}}
            >
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