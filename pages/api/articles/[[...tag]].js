import { articles } from '../../../data/articles.json';

export default function articlesHandler(req, res) {
    const { tag, limit } = req.query;

    const number = limit ? limit : articles.length;

    if (tag) {
        res.status(200).json(
            articles
                .filter((article) => article.tags.toLowerCase() == tag)
                .slice(0, number)
        );
    } else {
        res.status(200).json(articles.slice(0, number));
    }
}
