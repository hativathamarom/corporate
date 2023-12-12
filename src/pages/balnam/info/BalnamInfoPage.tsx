import symbol from "../../../assets/balnam/balnam-symbol.png"
import style from "./BalnamInfoPage.module.css"
import InfoSlide from "../../../components/info-slide/InfoSlide";
import LazyBackgroundImg from "../../../components/image/lazy-background-image/LazyBackgroundImg";
import { infoData } from "./InfoData";

export default function BalnamInfoPage() {
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