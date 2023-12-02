import { VideoCardListProps } from "../../../types/video";
import VideoCard from "../video-card/VideoCard";
import style from "./VideoCardList.module.css"
import { v4 } from "uuid"
export default function VideoList(props: VideoCardListProps) {

    return (
        <div className={style["video-container"]}>
            {
                props.videos.length!== 0 ?
                props.videos.map(item => {
                    return (
                        <VideoCard 
                            key={v4()}
                            title={item.title} 
                            src={item.src}                            
                        />
                    )
                })
                :
                <div>
                    לא נמצאו סרטונים להצגה
                </div>
            }
        </div>
    )
}