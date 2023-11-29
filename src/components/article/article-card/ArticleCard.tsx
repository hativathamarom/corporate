import style from "./ArticleCard.module.css"
import {ArticleCardProps} from "../../../types/article"

export default function ArticleCard(props:ArticleCardProps) {
    return (
        <article className={style["article"]}>
            <img className={style["article-image"]} src={props.imageSrc} />
            <h3 className={style["article-header"]}>{props.header}</h3>
            <p className={style["article-p"]}>{props.paragraph}</p>
            <div className={style["article-a-container"]}>
                <a href={props.link} target="_blank">להמשך הכתבה</a>
            </div>
        </article>
    )
}