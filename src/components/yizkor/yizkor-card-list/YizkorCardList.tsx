
import { v4 } from "uuid"
import { YizkorCardListProps } from "../../../types/yizkor"
import YizkorCard from "../yizkor-card/YizkorCard"
import style from "./YizkorCardList.module.css"

export default function YizkorCardList(props: YizkorCardListProps) {
    return (
        <div className={style["yizkor-card-list"]}>
            {
                props.yizkorCardList.map(item => {
                    return (
                        <YizkorCard
                            key={v4()}
                            name={item.name}
                            role={item.role}
                            militaryBackground={item.militaryBackground}
                            fallDate={item.fallDate}
                        />
                    )
                })
            }
        </div>
    )
}