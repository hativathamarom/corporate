import style from "./SideMenu.module.css"
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { SideMenuContext } from "../../contexts/SideMenuContext";
import maromSymbol from "../../assets/marom-icon.png"

import { IoMdClose  } from "react-icons/io";

export default function SideMenu() {

    const sideMenuContext = useContext(SideMenuContext)

    return (
        <div className={style["side-menu"]}>
            <div className={style["menu-items-container"]}>
                <div className={style["mobile-close-button"]}>
                    <IoMdClose  
                        className={style["mobile-close-menu-icon"]}
                        onClick={()=>{sideMenuContext?.setIsOpen(false)}} 
                    />
                </div>
                <div className={style["side-menu-symbol"]}>
                    <img src={maromSymbol} alt="" />
                </div>
                <div className={style["side-menu-links"]}>
                    <div>
                        <MenuItem path="/" alias={`חטיבת המרום`} />
                    </div>
                    <div>
                        <MenuItem path="/oketz" alias={`עוקץ`} />
                    </div>
                    <div>
                        <MenuItem path="/omer" alias={`עומר`} />
                    </div>
                    <div>
                        <MenuItem path="/lotar" alias={`לוט"ר`} />
                    </div>
                    <div>
                        <MenuItem path="/balnam" alias={`בלנ"ם`} />
                    </div>
                    <div>
                        <MenuItem path="/bet-sefer-yeri" alias={`בית ספר לירי`} />
                    </div>
                    <div>
                        <MenuItem path="/thniha-hatasa" alias={`צניחה והטסה`} />
                    </div>
                    <div>
                        <MenuItem path="/haspaka-hatasa" alias={`אספקה בהיטס`} />
                    </div>
                </div>
            </div>
        </div>
    )

}