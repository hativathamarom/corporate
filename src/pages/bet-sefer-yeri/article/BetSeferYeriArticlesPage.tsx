import ArticleCardList from "../../../components/article/article-card-list/ArticleCardList";
import { articles } from "./articles";
export default function BetSeferYeriArticlesPage() {
    return (
        <ArticleCardList 
            articles={articles}
        />
    )
}