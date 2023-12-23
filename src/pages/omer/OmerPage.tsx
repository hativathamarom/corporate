import PageNavigation from "../../components/page-navigation/PageNavigation"
import { Outlet } from "react-router-dom"


export default function OmerPage() {
    return (
        <>
            <PageNavigation items={[
                { text: 'על היחידה', to: '/omer' },
            ]} />
            <Outlet />
        </>
    )
}