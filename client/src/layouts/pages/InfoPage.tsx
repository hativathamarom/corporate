import style from "./InfoPage.module.css"
import { InfoPageProps } from "../../types/info-page"

export default function InfoPage(props: InfoPageProps) {
    return (
        <div className={style["content"]}>
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