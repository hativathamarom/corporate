import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";

export default function BetSeferYeriPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/bet-sefer-yeri' },
                { text: 'סרטוני תדמית', to: '/bet-sefer-yeri/video' },
                { text: 'כתבות', to: '/bet-sefer-yeri/articles' }
            ]} />
            <Outlet />
        </>
    )
}