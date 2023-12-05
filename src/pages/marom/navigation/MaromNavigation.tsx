import { useContext } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import Anchor from "../../../components/anchor/Anchor"
import style from "./MaromNavigation.module.css"
import { SideMenuContext } from "../../../contexts/SideMenuContext"
import { MaromNavigationProps } from "../../../types/marom-navigation"
import ScrollIndicator from "../../../components/scroll-indicator/ScrollIndicator"


export default function MaromNavigation(props: MaromNavigationProps) {

    const sideMenuContext = useContext(SideMenuContext)

    return (
        <>
            <nav >
                <div className={style["home-page-nav"]}>
                    <div className={style["side-menu"]}>
                        <span>
                            <RxHamburgerMenu
                                size={'30px'}
                                onClick={() => { sideMenuContext?.setIsOpen(true) }}
                            />
                        </span>
                    </div>
                    <div className={style["menu-link"]}>
                        <div>
                            <Anchor yoffset={-50} linkRef={props.aboutRef} text="על החטיבה" />
                        </div>
                        <div>
                            <Anchor yoffset={-50} linkRef={props.commanderPageRef} text="דף מפקד" />
                        </div>
                    </div>
                    <div className={style["menu-icon"]}></div>
                </div>
                <ScrollIndicator />
            </nav>
        </>
    )
}