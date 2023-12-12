import { useEffect, useState } from "react"
import { LazyImageProps } from "../../../types/lazyImage"

import style from "./LazyImage.module.css"

export default function LazyImage(props: LazyImageProps) {

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = props.fullImage
    }, [props.fullImage])

    return (
        <img className={style["background-img"]} src={imageLoaded ? props.fullImage : props.compressImage} alt="" />
    )
}