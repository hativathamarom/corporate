import symbol from "../../../assets/oketz/symbol.png"
import InfoSlide from "../../../components/info-slide/InfoSlide"
import style from "./OketzInfoPage.module.css"
import { infoData } from "./InfoData"
import LazyBackgroundImg from "../../../components/image/lazy-background-image/LazyBackgroundImg"


export default function OketzInfoPage() {
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