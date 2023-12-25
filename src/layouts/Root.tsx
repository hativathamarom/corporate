import Main from "./Main/Main"
import { ScrollRestoration } from "react-router-dom";
export default function Root() {
    return (
        <>
            <ScrollRestoration getKey={(location
            // ,matches
            ) => {
                return location.key;
            }} />
            <Main />
        </>
    )
}