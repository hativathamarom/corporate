import { useState, useEffect } from "react"
import symbol from "../../../assets/oketz/symbol.png"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import style from "./OketzInfoPage.module.css"

import src from "../../../assets/oketz/oketz2.jpeg"
// import srcCompress from "../../../assets/oketz/oketz2-compress.jpeg"
// import { Blurhash } from "react-blurhash"

const img64 = `data:image/png;base64,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`

export default function OketzInfoPage() {

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])

    return (
        <div className={style["container"]}>
            <div className={style["background-img-container"]}>
                {
                    !imageLoaded
                        ?
                        (
                            <img className={style["background-img"]} src={img64} alt="" />
                        )
                        :
                        (
                            <img className={style["background-img"]} src={src} alt="" />
                        )
                }
            </div>
            <div
                className={style["info-container"]}
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
        </div>
    )
}