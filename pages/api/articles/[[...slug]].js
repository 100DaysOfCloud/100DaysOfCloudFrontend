import { articles } from '../../../data/articles.json';

export default function articlesHandler(req, res) {
    const {
        query: { slug },
    } = req;

    let tag, limit;

    if (slug) {
        [tag, limit] = slug;
    }

    const number = limit ? limit : articles.length;

    if (slug && tag) {
        res.status(200).json(
            articles.filter((article) => article.tags == tag).slice(0, number)
        );
    } else {
        res.status(200).json(articles.slice(0, number));
    }
}
