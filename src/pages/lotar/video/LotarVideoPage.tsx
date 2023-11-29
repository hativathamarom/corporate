import VideoCardList from "../../../components/video/video-card-list/VideoCardList"

export default function LotarVideoPage() {

    return (
            <VideoCardList
                videos={[
                    {
                        title: `לוחמי גובה: הכירו את ה"קופים" של בית הספר ללוט"ר`,
                        src: `https://www.youtube.com/embed/pSVZImQTR98?si=e4I9CVUT7O6KTb_m`
                    },
                    {
                        title: `הפורצים של בית הספר ללוחמה בטרור | צה״ל`,
                        src: `https://www.youtube.com/embed/wWSScoqwYD8?si=IgXMVtsfAfBjZmce`
                    },
                    {
                        title: `אימון טיפוס וגלישת חבלים עם "הקופים" של לוט"ר אילת`,
                        src: `https://www.youtube.com/embed/Xp047WEs0Rg?si=ZHAnAdA2tfHr1VZL`
                    },
                    {
                        title: `הצצה לאימוני הלחימה בגובה ביחידה ללוחמה בטרור`,
                        src: `https://www.youtube.com/embed/d2BEtpAO2A4?si=LT6vdyBkGKQgiISK`
                    },
                    {
                        title: `יחידת הלוט"ר מה לומדים-בית הספר ללוחמה בטרור-צה"ל`,
                        src: `https://www.youtube.com/embed/fNWkBHtWzEg?si=nb0m13mYtz1_GZL9`
                    },
                    {
                        title: `לוחמי הלוט"ר השתלטו על דיזנגוף סנטר`,
                        src: `https://www.youtube.com/embed/eUUTjDJvRxo?si=P4zX5KITsBdN7Rkz`
                    },
                ]}
            />
    )

}