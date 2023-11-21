import VideoCardList from "../../../components/video/video-card-list/VideoCardList"

export default function OketzVideoPage() {

    return (
        <div>
            <VideoCardList 
                videos={[
                    {
                        title:`לוחם עוקץ עונה על כל השאלות`,
                        src:`https://www.youtube.com/embed/2q0_8vpK6Ws?si=fHjKPiOuO957pxOY`
                    },
                    {
                        title:`עוקץ נערכים לכניסה הקרקעית עם הגיבורים על 4`,
                        src:`https://www.youtube.com/embed/XP_tc10A3HA?si=A2aWn0a9QgNNeIUQ`
                    },
                    {
                        title:`הצצה לאימון המיוחד של עוקץ`,
                        src:`https://www.youtube.com/embed/pc-OJFfZrWA?si=aC06I8VjtMq5gd95`
                    },
                    {
                        title:`תיעוד מתפיסת המחבלים במסגרת פעילות עוקץ`,
                        src:`https://www.youtube.com/embed/rlQdXAo06Ns?si=vxrv7cABme93gcTw`
                    },
                    {
                        title:`הכירו את יחידת עוקץ | צה״ל`,
                        src:`https://www.youtube.com/embed/71lHNGNxQfQ?si=nq8qrsm8BtmZVqXM`
                    }
                    ,
                    {
                        title:`לוחמי יחידת הכלבנים "עוקץ`,
                        src:`https://www.youtube.com/embed/ffo5qQV1JMs?si=qMHiKyVT1anVeiJs`
                    }
                ]}
            />
        </div>
    )

}