import { VideoCardListProps } from "../../../types/video";
import VideoCard from "../video-card/VideoCard";
import style from "./VideoCardList.module.css"

export default function VideoList(props: VideoCardListProps) {

    return (
        <div className={style["container"]}>
            {
                props.videos.length!== 0 ?
                props.videos.map(item => {
                    return (
                        <VideoCard 
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