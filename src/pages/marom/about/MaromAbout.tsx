
import style from "./MaromAbout.module.css"

export default function AboutMarom() {
    return (
        <div className={style["about-maraom-container"]}>
            <div>
                <h1 className={style["about-maraom-title"]}>חטיבת המרום</h1>
            </div>
            <p>
                בשנת 1949 הוקם בית בספר לצניחה לאורך השנים צורפו יחידות שונות עד שבסופו של דבר הוקמה חטיבת המרום כפי שהיא היום.
            </p>
            <p>
                קיום החטיבה כוללת את היחידות הבאות :
            </p>
            <ul className={style["unit-list"]}>
                <li>עוקץ</li>
                <li>לוט"ר</li>
                <li>בלנ"ם</li>
                <li>בית ספר לירי</li>
                <li>צניחה והטסה</li>
                <li>אספקה בהיטס</li>
            </ul>
            <p>
                תוחומי העיסוק של החטיבה הוא רכבים וזה גם מה שמיחד אותה מחטיבות אחרות.
            </p>
            <p>
                החטיבה מתעסקת בהכשרות , קורסים ,לחימה ,בביטחון שוטף וכל זאת נעשה תוך כדי שילוב המקצועות היחודים שכל יחידה מביאה איתה.
            </p>
        </div>
    )
}