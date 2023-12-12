
import { useEffect, useRef, useState } from "react"
import style from "./ImageSlider.module.css"
import { ImageSliderProps } from "../../../types/image-slider"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

export default function ImageSlider(props: ImageSliderProps) {

    const imageRef = useRef<HTMLImageElement>(null)
    const [currentImage, setCurrentImage] = useState(0)
    const [images] = useState(props.images)

    useEffect(() => {
        const intervalId = setInterval(onNextHandler, props.interval)
        return (() => {
            clearInterval(intervalId)
        })
    }, [])

    const onNextHandler = () => {
        setCurrentImage(prev => {
            const current = prev + 1
            if (current === images.length) return 0
            else return current
        })
    }

    const onPrevHandler = () => {
        setCurrentImage(prev => {
            const current = prev - 1
            if (current === -1) return images.length - 1
            else return current
        })
    }

    return (
        <div className={style["images"]}>
            <img
                className={`${currentImage % 2 === 0 ? style["image-animation1"] : style["image-animation2"]}`}
                ref={imageRef}
                src={props.images[currentImage]}
                loading="lazy"
            />
            <div className={style["image-switch"]}>
                <div className={style["image-switch-btn"]}>
                    <button onClick={onNextHandler}> <MdOutlineArrowForwardIos size={"2rem"} /> </button>
                </div>
                <div className={style["image-switch-btn"]}>
                    <button onClick={onPrevHandler}> <MdOutlineArrowBackIos size={"2rem"}/> </button>
                </div>
            </div>
        </div>
    )
}