import symbol from "../../../assets/haspaka-hatasa/symbol.png"
import LazyBackgroundImg from "../../../components/image/lazy-background-image/LazyBackgroundImg"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import style from "./HaspakaHatasaInfoPage.module.css"

import { infoData } from "./InfoData"

export default function HaspakaHatasaInfoPage() {
    return (
        <div className={style["info-container"]}>
            <LazyBackgroundImg
                img={infoData.img}
                compressImg={infoData.compressImg}
                isDarkened={false}
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    zIndex: "-1",
                }} >
            </LazyBackgroundImg>
            <InfoSlide
                title={infoData.title}
                paragraph={infoData.paragraph}
                symbol={symbol}
            />
        </div>
    )
}