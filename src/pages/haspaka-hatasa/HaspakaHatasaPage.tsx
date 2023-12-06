import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";

export default function HaspakaHatasaPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/haspaka-hatasa' },
                { text: 'סרטוני תדמית', to: '/haspaka-hatasa/video' },
                { text: 'כתבות', to: '/haspaka-hatasa/articles' }
            ]} />
            <Outlet />
        </>
    )
}