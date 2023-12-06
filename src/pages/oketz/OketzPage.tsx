import PageNavigation from "../../components/page-navigation/PageNavigation"
import { Outlet } from "react-router-dom"


export default function OkethPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/oketz' },
                { text: 'סרטוני תדמית', to: '/oketz/video' },
                { text: 'כתבות', to: '/oketz/articles' },
                { text: 'יזכור🕯️', to: '/oketz/yizkor' }
            ]} />
            <Outlet />
        </>
    )
}