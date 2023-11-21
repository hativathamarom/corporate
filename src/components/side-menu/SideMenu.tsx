import style from "./SideMenu.module.css"
import { RxHamburgerMenu } from "react-icons/rx";
import MenuItem from "./MenuItem";

export default function SideMenu() {

    return (
        <div className={style["sidebar"]}>
            <div className={style["menu-icon"]}>
                <RxHamburgerMenu size={'3em'} />
            </div>
            <div className={style["menu-items-container"]}>
                <div>
                    <MenuItem path="/" alias={`חטיבת המרום`} />
                </div>
                <div>
                    <MenuItem path="/balnam" alias={`בלנ"ם`} />
                </div>
                <div>
                    <MenuItem path="/lotar" alias={`לוט"ר`} />
                </div>
                <div>
                    <MenuItem path="/oketz" alias={`עוקץ`} />
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
    )

}