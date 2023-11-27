import style from "./ArticlesPage.module.css"
import { ArticlesProps } from "../../../types/article"
import { v4 } from "uuid"
export default function ArticlesPage(props: ArticlesProps) {
    return (
        <div className={style["article-container"]}>
            {
                props.articles.map(article => {
                    return (
                        <article key={v4()} className={style["article"]}>
                            <img className={style["article-image"]} src={article.imageSrc} />
                            <h3 className={style["article-header"]}>{article.header}</h3>
                            <p className={style["article-p"]}>{article.paragraph}</p>
                            <div className={style["article-a-container"]}>
                                <a href={article.link} target="_blank">להמשך הכתבה</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}