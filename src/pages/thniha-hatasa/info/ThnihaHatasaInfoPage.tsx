import symbol from "../../../assets/thniha-hatasa/symbol.png";
import InfoSlide from "../../../components/info-slide/InfoSlide";
import style from "./ThnihaHatasaInfoPage.module.css"
import { infoData } from "./InfoData";
import LazyBackgroundImg from "../../../components/image/lazy-background-image/LazyBackgroundImg";

export default function ThnihaHatasaInfoPage() {
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