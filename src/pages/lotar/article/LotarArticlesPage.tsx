import ArticleCardList from "../../../components/article/article-card-list/ArticleCardList";
import { articles } from "./articles";
export default function LotarArticlesPage() {
    return (
        <ArticleCardList 
            articles={articles}
        />
    )
}