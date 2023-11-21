import { VideoCardProps } from "../../../types/video"
import style from "./VideoCard.module.css"

export default function VideoCard(props: VideoCardProps) {

    return (
        <div className={style["container"]}>
            <div className={style["video"]} >
                <iframe
                    src={props.src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className={style["title"]}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )


}