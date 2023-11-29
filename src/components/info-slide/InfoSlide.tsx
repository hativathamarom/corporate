import { InfoSlideProps } from "../../types/info-slide"
import style from "./InfoSlide.module.css"

export default function InfoSlide(props: InfoSlideProps) {
    return (
        <div className={style["info-slide-container"]}>
            <div className={style["image"]}></div>
            <div className={style["info"]}>
                <div className={style["symbol"]}>
                    <img src={props.symbol} />
                </div>
                <h1>{props.title}</h1>
                <p>
                    {props.paragraph}
                </p>
            </div>
        </div>
    )
}