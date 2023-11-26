import article1 from "../../../assets/oketz/article1.jpg"
import style from "./OketzArticlesPage.module.css"

export default function OketzArticlesPage() {
    return (
        <div>
            <section className={style["article"]}>
                <div className={style["article-image-container"]}>
                    <img className={style["article-image"]} src={article1} />
                </div>
                <h1 className={style["article-h1"]}>ידידו הטוב של הלוחם: כלבי "עוקץ" הביאו לחיסול 10 מחבלים וחילוץ של 200 אזרחים</h1>
                <p className={style["article-p"]}>מתחילת המערכה פועלת יחידת הכלבנים של צה"ל ביחד עם יחידות אחרות כגון סיירת מטכ"ל בלחימה ביישובי העוטף.
                    הכלב נארו הצליח לחשוף מארב של מחבלים ותקף אותם. הוא נהרג אחרי שעות של קרב.
                    צ'ארלי הביא ללכידת בכיר ביחידה התת קרקעית של חמאס.
                    כעת הם ממתינים לכניסה לעזה.
                    <a className={style["article-a"]} href="https://news.walla.co.il/item/3616124" target="_blank">להמשך הכתבה</a>
                </p>
            </section>
        </div>
    )
}