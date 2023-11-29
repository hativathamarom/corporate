import { ArticleCardListProps } from "../../../types/article"
import style from "./ArticleCardList.module.css"
import ArticleCard from "../article-card/ArticleCard"
import { v4 } from "uuid"

export default function ArticleCardList(props: ArticleCardListProps) {

    return (
        <div className={style["article-container"]}>
            {
                props.articles.map(article =>{
                    return (
                        <ArticleCard 
                            key={v4()}
                            header={article.header}
                            imageSrc={article.imageSrc}
                            paragraph={article.paragraph}
                            link={article.link}
                        />
                    )
                })
            }
        </div>
    )

}