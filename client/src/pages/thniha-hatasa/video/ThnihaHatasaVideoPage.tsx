import VideoCardList from "../../../components/video/video-card-list/VideoCardList"

export default function ThnihaHatasaVideoPage() {

    return (
        <div>
            <VideoCardList 
                videos={[
                    {
                        title:`יחידת צניחה והטסה - מדריך צניחה`,
                        src:`https://www.youtube.com/embed/MMP5YpsUFN8?si=PzcnzbT__snvy5_U`
                    }
                ]}
            />
        </div>
    )

}