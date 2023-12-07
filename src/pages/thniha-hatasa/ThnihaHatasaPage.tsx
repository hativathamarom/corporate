import { Outlet } from "react-router-dom";
import PageNavigation from "../../components/page-navigation/PageNavigation";
export default function ThnihaHatasaPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/thniha-hatasa' },
                { text: 'סרטוני תדמית', to: '/thniha-hatasa/video' },
                { text: 'כתבות', to: '/thniha-hatasa/articles' },
                { text: 'יזכור🕯️', to: '/thniha-hatasa/yizkor' }
            ]} />
            <Outlet />
        </>
    )
}