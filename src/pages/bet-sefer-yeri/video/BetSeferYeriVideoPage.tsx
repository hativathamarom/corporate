import VideoCardList from "../../../components/video/video-card-list/VideoCardList"

export default function BetSeferYeriVideoPage() {

    return (
        <div>
            <VideoCardList 
                videos={[
                    {
                        title:`בול פגיעה: איך לומדים לירות? | צה״ל`,
                        src:`https://www.youtube.com/embed/5Mf7LPW2whE?si=Cx6bMp-lnVd6tV92`
                    },
                    {
                        title:`קצר וקולע - הטיפים הכי חשובים לירי! | צה״ל`,
                        src:`https://www.youtube.com/embed/LfJ-uET4RmM?si=YpbQVcnxh3I9CuLG`
                    }
                ]}
            />
        </div>
    )

}