
import style from "./YizkorCard.module.css"
import yizkorGif from "../../../assets/yizkor1.gif"
import { YizkorCardProps } from "../../../types/yizkor"
import { useState } from "react"

import useScreenSize from "../../../hooks/useScreenSize"


export default function YizkorCard(props: YizkorCardProps) {

    const screenSize = useScreenSize()

    const [xPct ,setXPct] = useState(0)
    const [yPct ,setYPct] = useState(0)

    const onMouseMoveHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if(screenSize.width < 600) {
            setXPct(0)
            setYPct(0)
            return
        }

        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        setXPct(((mouseX / width) - 0.5))
        setYPct(((mouseY / height) - 0.5) * -1)
    }

    const onMouseLeave = () => {
        setXPct(0)
        setYPct(0)
    }

    return (
        <div 
            className={style["yizkor-card"]}
            onMouseMove={(e)=>onMouseMoveHandler(e)} 
            onMouseLeave={onMouseLeave}
            style={{transform:`rotateX(${yPct}deg) rotateY(${xPct}deg)`}}
        >
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