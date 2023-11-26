import { useRef } from "react"
import style from "./MobileImageSlider.module.css"

export default function MobileImageSlider () {

    const conatinerRef = useRef<HTMLDivElement>(null)
    const redRef = useRef<HTMLDivElement>(null)
    const greenRef = useRef<HTMLDivElement>(null)
    const blueRef = useRef<HTMLDivElement>(null)


    return (

        <>
        <div ref={conatinerRef} className={style["image-slider-container"]}>
            <div ref={redRef} className={style["red"]}>red</div>
            <div ref={greenRef} className={style["green"]}>green</div>
            <div ref={blueRef} className={style["blue"]}>blue</div>
 
        </div>
        <div>
        <button onClick={()=>{
                const containerScrollWidth = conatinerRef.current?.scrollLeft
                const x = conatinerRef.current?.getBoundingClientRect().width
                if(containerScrollWidth!==undefined && x !==undefined) {
                    conatinerRef.current?.scrollTo({left: containerScrollWidth - x ,behavior:"smooth"})
                }
            }}>left</button>
            <button onClick={()=>{
                const containerScrollWidth = conatinerRef.current?.scrollLeft
                const x = conatinerRef.current?.getBoundingClientRect().width
                if(containerScrollWidth!==undefined && x !==undefined) {
                    conatinerRef.current?.scrollTo({left: containerScrollWidth + x ,behavior:"smooth"})
                }
            }}>right</button>
        </div>
        </>
    )
} 