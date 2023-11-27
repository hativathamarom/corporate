import ArticlesPage from "../../../layouts/pages/article/ArticlesPage";
import { articles } from "./articles";
export default function OketzArticlesPage() {
    return (
        <ArticlesPage 
            articles={articles}
        />
    )
}