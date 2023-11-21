import VideoCardList from "../../../components/video/video-card-list/VideoCardList"

export default function BalnamVideoPage() {

    return (
        <div>
            <VideoCardList
                videos={[
                    {
                        title: `בית הספר לניוד מבצעי - בלנ״מ`,
                        src: `https://www.youtube.com/embed/5AkEmFuU__E?si=P02gRS7t49vY3i6i`
                    },
                    {
                        title: `איך נוהגים בחושך מוחלט? הדקו חגורות | צה"ל`,
                        src: `https://www.youtube.com/embed/wqXA00e3YkM?si=4N2-fFdErHCyr0_J`
                    },
                    {
                        title: `סרט תדמית בלנ''מ - בית הספר לניוד מבצעי`,
                        src: `https://www.youtube.com/embed/MSss1vzHEZk?si=O_ZWSz3IsbMlbukC`
                    },
                ]}
            />
        </div>
    )

}