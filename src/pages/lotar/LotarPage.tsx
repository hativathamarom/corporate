import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";

export default function LotarPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/lotar/info' },
                { text: 'סרטוני תדמית', to: '/lotar/video' },
                { text: 'כתבות', to: '/lotar/articles' }
            ]} />
            <Outlet />
        </>
    )
}