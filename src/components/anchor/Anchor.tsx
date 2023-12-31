
import { AnchorProps } from "../../types/anchor"
import style from "./Anchor.module.css"

export default function Anchor(props: AnchorProps) {

    const scrollInToView = () => {
        let y = props.linkRef.current?.getBoundingClientRect().y;

        if (y) {
            if (props.yoffset)
                window.scrollTo({ top: y + window.scrollY + props.yoffset, behavior: "smooth" })
            else
                window.scrollTo({ top: y + window.scrollY, behavior: "smooth" })
        }
    }

    return (
        <a className={style["link"]} onClick={() => scrollInToView()}>{props.text}</a>
    )
}