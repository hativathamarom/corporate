import { useEffect, useRef } from "react"
import { v4 } from "uuid"

import style from "./MobileImageSlider.module.css"


import image1 from "../../assets/home/images/1.jpeg"
import image2 from "../../assets/home/images/2.jpeg"
import image3 from "../../assets/home/images/3.jpeg"
import image4 from "../../assets/home/images/4.jpeg"
import image5 from "../../assets/home/images/5.jpeg"

const images = [image1, image2, image3, image4, image5]
let currentImage = 0
let direction = true;

export default function MobileImageSlider() {
    const intervalRef = useRef<number>()
    const conatinerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        intervalRef.current = setInterval(autoSlide, 5000)
        return (() => {
            clearInterval(intervalRef.current)
        })
    }, [])


    const autoSlide = () => {
        if (currentImage >= images.length) {
            direction = false
            currentImage = 5
        }
        else if (currentImage <= 0){
            direction = true
            currentImage = 0
        }
        
        if (direction) {
            scrollLeft()
        }
        else {
            scrollRight()
        }
    }

    const scrollLeft = () => {
        const containerScrollWidth = conatinerRef.current?.scrollLeft
        const x = conatinerRef.current?.getBoundingClientRect().width
        if (containerScrollWidth !== undefined && x !== undefined) {
            conatinerRef.current?.scrollTo({ left: containerScrollWidth - x, behavior: "smooth" })
        }
        currentImage = currentImage + 1
    }

    const scrollRight = () => {
        const containerScrollWidth = conatinerRef.current?.scrollLeft
        const x = conatinerRef.current?.getBoundingClientRect().width
        if (containerScrollWidth !== undefined && x !== undefined) {
            conatinerRef.current?.scrollTo({ left: containerScrollWidth + x, behavior: "smooth" })
        }
        currentImage = currentImage - 1
    }

    return (
        <div>
            <div ref={conatinerRef} className={style["image-slider-container"]}>
                {
                    images.map(item => {
                        return (
                            <div key={v4()}>
                                <img src={item} />
                            </div>
                        )
                    })
                }

            </div>
            <div className={style["image-slider-buttons"]}>
                <button onClick={scrollRight}>right</button>
                <button onClick={scrollLeft}>left</button>
            </div>
        </div>
    )
} 