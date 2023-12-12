import { useRef } from "react"
import image1 from "../../assets/home/images/1.jpeg"
import image2 from "../../assets/home/images/2.jpeg"
import image3 from "../../assets/home/images/3.jpeg"
import image4 from "../../assets/home/images/4.jpeg"
import image5 from "../../assets/home/images/5.jpeg"
import style from "./HomePage.module.css"
import ImageSlider from "../../components/image/image-slider/ImageSlider"
import MaromAbout from "./about/MaromAbout"
import MaromNavigation from "./navigation/MaromNavigation"


const images = [image1, image2, image3, image4, image5]

export default function HomePage() {
    const aboutRef = useRef<HTMLElement>(null)
    const commanderPageRef = useRef<HTMLElement>(null)

    return (
        <>
            <header className={style["header"]}>
                <div className={style["nav-container"]}>
                    <MaromNavigation aboutRef={aboutRef} commanderPageRef={commanderPageRef} />
                </div>
                <div className={style["image-slider-container"]}>
                    <ImageSlider images={images} interval={5000} />
                </div>
                <div className={style["about-maraom-title"]}>
                    <h1 >
                        <span>חטיבת</span> <span>המרום</span>
                    </h1>
                    <h3>פתרונות מבצעיים</h3>
                </div>
            </header>
            <section className={style["section"]} ref={aboutRef} >
                <article className={style["article"]}>
                    <MaromAbout />
                </article>
            </section>
            <hr />
            <section className={style["section"]} ref={commanderPageRef} >
                <article className={style["article"]}>
                    <h1>דף מפקד</h1>
                    <div className={style["bold"]}>
                        <p>
                            מִי שֶׁבֵּרַךְ אֲבוֹתֵינוּ
                            אַבְרָהָם יִצְחָק וְיַעֲקֹב,
                            הוּא יְבָרֵךְ אֶת חַיָּלֵי צְבָא הַהֲגַנָּה לְיִשְׂרָאֵל
                            [וְאַנְשֵׁי כֹּחוֹת הַבִּטָּחוֹן],
                            הָעוֹמְדִים עַל מִשְׁמַר אַרְצֵנוּ וְעָרֵי אֱלֹהֵינוּ,
                            מִגְּבוּל הַלְּבָנוֹן וְעַד מִדְבַּר מִצְרַיִם,
                            וּמִן הַיָּם הַגָּדוֹל עַד לְבוֹא הָעֲרָבָה
                            [וּבְכָל מָקוֹם שֶׁהֵם],
                            בַּיַּבָּשָׁה בָּאֲוִיר וּבַיָּם.
                        </p>
                        <p>
                            יִתֵּן יְיָ אֶת אוֹיְבֵינוּ הַקָּמִים עָלֵינוּ
                            נִגָּפִים לִפְנֵיהֶם!
                            הַקָּדוֹשׁ בָּרוּךְ הוּא יִשְׁמֹר וְיַצִּיל אֶת חַיָלֵינוּ
                            מִכׇּל צָרָה וְצוּקָה,
                            וּמִכׇּל נֶגַע וּמַחֲלָה,
                            וְיִשְׁלַח בְּרָכָה וְהַצְלָחָה בְּכָל מַעֲשֵׂה יְדֵיהֶם.
                        </p>
                        <p>
                            יַדְבֵּר שׂוֹנְאֵינוּ תַּחְתֵּיהֶם,
                            וִיעַטְּרֵם בְּכֶתֶר יְשׁוּעָה וּבַעֲטֶרֶת נִצָּחוֹן.
                        </p>
                        <p>

                            וִיקֻיַּם בָּהֶם הַכָּתוּב (דברים כ,ד):
                            "כִּי יְיָ אֱלֹהֵיכֶם הַהֹלֵךְ עִמָּכֶם,
                            לְהִלָּחֵם לָכֶם עִם אֹיְבֵיכֶם
                            לְהוֹשִׁיעַ אֶתְכֶם".
                            וְנֹאמַר: "אָמֵן".
                        </p>
                    </div>
                    <h2>
                        לוחמים!
                    </h2>
                    <p>
                        אנחנו במלחמת מצווה, מלחמת העצמאות של הדור שלנו
                    </p>
                    <p className={style["gole"]}>
                        המטרה - להחזיר את ביטחון העם היהודי בארצו, ארץ ישראל!
                    </p>
                    <br />
                    <p>
                        כל יחידה במשימתה, כל לוחם וכל חייל במשימתו הייחודית, השונות בנינו זו
                        עוצמתנו.
                    </p>
                    <p>
                        אנחנו מספקים יכולות ייחודיות בקרב, ובפרט כאשר היכולות
                        משולבות יחד זו עוצמה שאין לאף כוח בצה״ל.
                    </p>
                    <br />
                    <p>
                        הגבירו את המוכנות בכל מה שניתן עד להפעלה, וכשנפעל עשו זאת בצורה
                        הטובה ביותר, רכזו את כל מה שלמדתם עד ליום פקודה ותפעלו נכון -
                        תחתרו למגע, תפעלו במקצועיות וזכרו את המטרה שלשמה אנחנו כאן -
                        להחזיר את ביטחון העם היהודי בארצו, ארץ ישראל!
                    </p>
                    <br />
                    <p style={{ fontWeight: "bolder" }}>
                        סומך עליכם וגאה להיות מפקד החטיבה המיוחדת הזאת בגודל
                        שעה זו - רק ניצחון!
                    </p>
                    <br />
                    <h1 style={{ fontWeight: "900" }}>
                        ביחד עד הניצחון
                    </h1>
                    <p style={{ textAlign: "left", width: "90%" }}>
                        אל״מ, גיל אליה
                    </p>
                    <p style={{ textAlign: "left", width: "90%" }}>
                        מפקד מרום
                    </p>
                </article>
            </section>
        </>
    )
}