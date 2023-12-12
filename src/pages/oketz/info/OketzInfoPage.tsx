import symbol from "../../../assets/oketz/symbol.png"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import style from "./OketzInfoPage.module.css"
import { oketzInfoData } from "./oketzInfoData"
import LazyImage from "../../../components/image/lazy-image/LazyImage"


export default function OketzInfoPage() {
    return (
        <div className={style["container"]}>
            <div className={style["background-img-container"]}>
                <LazyImage 
                    compressImage={oketzInfoData.compressImg} 
                    fullImage={oketzInfoData.img}
                />
            </div>
            <div
                className={style["info-container"]}
            >
                <InfoSlide
                    title={oketzInfoData.title}
                    paragraph={oketzInfoData.paragraph}
                    symbol={symbol}
                />
            </div>
        </div>
    )
}