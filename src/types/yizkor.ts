export type YizkorCardProps = {
    name:string
    rank:string
    role:string
    militaryBackground:string
    fallDate:string
    img?:string
}

export type YizkorCardListProps = {
    yizkorCardList: YizkorCardProps[]
}