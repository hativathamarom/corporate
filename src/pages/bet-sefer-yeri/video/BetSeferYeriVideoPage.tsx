import VideoCardList from "../../../components/video/video-card-list/VideoCardList"

export default function BetSeferYeriVideoPage() {

    return (
            <VideoCardList 
                videos={[
                    {
                        title:`סיכום 60 יום ״חרבות ברזל״ ⚔️🔥 | בית הספר למקצועות הירי`,
                        src:`https://www.youtube.com/embed/ROegqHDczeY?si=jo2cLVvTOstYnln2`
                    },
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
    )

}