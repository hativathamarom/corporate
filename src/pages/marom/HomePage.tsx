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
import MaromTitle from "./header/MaromTitle"
import CommanderPage from "./commander-page/CommanderPage"
import SocialMediaLinks from "./social-media/SocialMediaLinks"


const images = [image1, image2, image3, image4, image5]

export default function HomePage() {
    const aboutRef = useRef<HTMLElement>(null)
    const commanderPageRef = useRef<HTMLElement>(null)

    return (
        <div className={style["marom-page-container"]}>
            <header className={style["header"]}>
                <div className={style["nav-container"]}>
                    <MaromNavigation aboutRef={aboutRef} commanderPageRef={commanderPageRef} />
                </div>
                <div className={style["image-slider-container"]}>
                    <ImageSlider images={images} interval={5000} />
                </div>
                <div>
                    <MaromTitle />
                </div>
                <div>
                    <SocialMediaLinks />
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
                    <CommanderPage />
                </article>
            </section>
        </div>
    )
}