
import style from "./YizkorCard.module.css"
import yizkorGif from "../../../assets/yizkor1.gif"
import { YizkorCardProps } from "../../../types/yizkor"


export default function YizkorCard(props: YizkorCardProps) {
    return (
        <div className={style["yizkor-card"]}>
            <div className={style["yizkor-header"]}>
                <div className={style["yizkor-gif-container"]}>
                    <img className={style["yizkor-gif"]} src={yizkorGif} alt="" />
                </div>
            </div>
            <div className={style["yizkor-main"]}>
                <div className={style["yizkor-name-container"]}>
                    <h1>{props.name}</h1>
                </div>
                <hr />
                <div className={style["yizkor-role"]}>
                    <p><span>תפקיד: </span>{props.role}</p>
                    <p><span>רקע צבאי: </span>{props.militaryBackground}</p>
                    <p><span>תאריך נפילה: </span>{props.fallDate}</p>
                </div>
            </div>
        </div>
    )
}