import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";

export default function BalnamPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/balnam' },
                { text: 'סרטוני תדמית', to: '/balnam/video' },
                { text: 'כתבות', to: '/balnam/articles' }
            ]} />
            <Outlet />
        </>
    )
}