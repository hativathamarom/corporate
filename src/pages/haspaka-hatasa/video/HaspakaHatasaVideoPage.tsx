import VideoCardList from "../../../components/video/video-card-list/VideoCardList"

export default function HaspakaHatasaVideoPage() {

    return (
            <VideoCardList 
                videos={[
                    {
                        src:`https://www.youtube.com/embed/q_dVpBrr_iU?si=VkdRqkKCbMLJdDEx`,
                        title:`תיעוד ממבצע "מתנה משמיים' שבוצע בגזרת חאן יונס | ישראל במלחמה`
                    }
                ]}
            />
    )

}