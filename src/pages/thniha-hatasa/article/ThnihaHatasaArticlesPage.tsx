import ArticleCardList from "../../../components/article/article-card-list/ArticleCardList";
import { articles } from "./articles";
export default function ThnihaHatasaArticlesPage() {
    return (
        <ArticleCardList 
            articles={articles}
        />
    )
}