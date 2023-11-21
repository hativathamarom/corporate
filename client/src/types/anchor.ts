import { RefObject } from "react"

export type AnchorProps = {
    text:string
    linkRef:RefObject<HTMLElement>
    yoffset?:number
}