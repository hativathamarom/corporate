import { useEffect, useState } from "react";
import style from "./ScrollIndicator.module.css"

export default function ScrollIndicator() {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
       
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={style["scroll-state-container"]}>
            <div className={style["scroll-state"]} style={{ width: `${scrollTop}%` }}></div>
        </div>
    )
}