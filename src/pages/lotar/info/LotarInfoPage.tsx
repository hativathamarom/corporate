
import symbol from "../../../assets/lotar/lotar-symbol.png"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import LazyBackgroundImg from "../../../components/image/lazy-background-image/LazyBackgroundImg"
import image from "../../../assets/lotar/lotar1.webp"
import style from "./LotarInfoPage.module.css"

import { infoData } from "./infoData"

export default function LotarInfoPage() {
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