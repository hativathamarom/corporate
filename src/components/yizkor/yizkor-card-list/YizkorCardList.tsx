
import { v4 } from "uuid"
import { YizkorCardListProps } from "../../../types/yizkor"
import YizkorCard from "../yizkor-card/YizkorCard"
import style from "./YizkorCardList.module.css"
import { useState } from "react"

export default function YizkorCardList(props: YizkorCardListProps) {

    const [yizkorCardList] = useState(props.yizkorCardList)
    const [filteredYizkorCardList, setFilteredYizkorCardList] = useState(props.yizkorCardList)

    const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredList = yizkorCardList.filter(item => item.name.includes(event.target.value))
        setFilteredYizkorCardList(filteredList)
    }

    return (
        <>
            <div className={style["yizkor-card-search"]}>
                <input type="text" placeholder="חיפוש לפי שם" onChange={(event) => filterHandler(event)} />
            </div>
            <div className={style["yizkor-card-list"]}>
                {
                    filteredYizkorCardList.map(item => {
                        return (
                            <YizkorCard
                                key={v4()}
                                rank={item.rank}
                                name={item.name}
                                role={item.role}
                                militaryBackground={item.militaryBackground}
                                fallDate={item.fallDate}
                                img={item.img}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}