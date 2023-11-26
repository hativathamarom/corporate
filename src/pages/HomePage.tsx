import { useContext, useRef } from "react"
import image1 from "../assets/home/images/1.jpeg"
import image2 from "../assets/home/images/2.jpeg"
import image3 from "../assets/home/images/3.jpeg"
import image4 from "../assets/home/images/4.jpeg"
import image5 from "../assets/home/images/5.jpeg"
import maromSymbol from "../assets/marom-icon.png"
import style from "./HomePage.module.css"
import ImageSlider from "../components/image-slider/ImageSlider"
import Anchor from "../components/anchor/Anchor"
import { BiCheck } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx"
import { SideMenuContext } from "../contexts/SideMenuContext"


const images = [image1, image2, image3, image4, image5]

export default function HomePage() {
    const sideMenuContext = useContext(SideMenuContext)
    const aboutRef = useRef<HTMLElement>(null)
    const commanderPageRef = useRef<HTMLElement>(null)

    return (
        <div className={style["container"]}>
            <div className={style["content"]}>
                <header className={style["header"]}>
                    <nav className={style["home-page-nav"]}>
                        <div className={style["side-menu"]}>
                            <span>
                                <RxHamburgerMenu 
                                    size={'30px'} 
                                    onClick={()=>{sideMenuContext?.setIsOpen(true)}}
                                />
                            </span>
                        </div>
                        <div className={style["menu-link"]}>
                            <div>
                                <Anchor linkRef={aboutRef} text="על החטיבה" />
                            </div>
                            <div>
                                <Anchor linkRef={commanderPageRef} text="דף מפקד" />
                            </div>
                        </div>
                        <div className={style["menu-icon"]}>

                        </div>
                    </nav>

                </header>
                <section className={style["section"]} ref={aboutRef} >
                    <div className={style["image-slider"]}>
                        <ImageSlider images={images} interval={5000} />
                    </div>

                    <article className={style["article"]}>
                        <div style={{ display: "flex" }}>
                            <img style={{ marginLeft: "10px" }} width={50} src={maromSymbol} alt="" />
                            <h1>חטיבת המרום</h1>
                        </div>
                        <p>בשנת 1949 הוקם בית בספר לצניחה לאורך השנים צורפו יחידות שונות עד שבסופו של דבר הוקמה חטיבת המרום כפי שהיא היום.</p>
                        <p>
                            קיום החטיבה כוללת את היחידות הבאות :
                        </p>
                        <ul className={style["unit-list"]}>
                                <li><BiCheck /> בלנ"ם</li>
                                <li><BiCheck /> לוט"ר</li>
                                <li><BiCheck /> עוקץ</li>
                                <li><BiCheck /> בית ספר לירי</li>
                                <li><BiCheck /> צניחה והטסה</li>
                                <li><BiCheck /> הספקה בהטסה</li>
                            </ul>
                        <p>
                            תוחומי העיסוק של החטיבה הוא רכבים וזה גם מה שמיחד אותה מחטיבות אחרות.
                        </p>
                        <p>
                            החטיבה מתעסקת בהכשרות , קורסים ,לחימה ,בביטחון שוטף וכל זאת נעשה תןך כדי שילוב המקצועות היחודים שכל יחידה מביאה איתה.
                        </p>
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
            </div>
        </div>

    )
}