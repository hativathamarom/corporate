import style from "./MaromTitle.module.css"


export default function MaromTitle() {
    return (
        <div className={style["maraom-title"]}>
            <h1 >
                <span>חטיבת</span> <span>המרום</span>
            </h1>
            <h3>פתרונות מבצעיים</h3>
        </div>
    )
}