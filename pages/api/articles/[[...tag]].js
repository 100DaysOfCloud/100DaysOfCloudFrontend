import { articles } from '../../../data/articles.json';

export default function articlesHandler(req, res) {
    const {
        query: { tag, limit },
    } = req;

    const number = limit ? limit : 5;

    if (tag) {
        res.status(200).json(
            articles.filter((article) => article.tags == tag).slice(0, number)
        );
    } else {
        res.status(200).json(articles.slice(0, 10));
    }
}
