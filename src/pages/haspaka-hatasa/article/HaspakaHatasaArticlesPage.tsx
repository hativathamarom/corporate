import ArticleCardList from "../../../components/article/article-card-list/ArticleCardList";
import { articles } from "./articles";
export default function HaspakaHatasaArticlesPage() {
    return (
        <ArticleCardList 
            articles={articles}
        />
    )
}