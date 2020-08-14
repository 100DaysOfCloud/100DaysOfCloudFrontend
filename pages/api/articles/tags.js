import { articles } from '../../../data/articles.json';

import _ from 'lodash';

export default function returnFilteredArticles(req, res) {
    // Catch all possible routes
    const tags = _(articles)
        .countBy('tags')
        .map(function (count, tag) {
            return {
                tag: tag,
                count: count,
            };
        })
        .orderBy('count', 'desc')
        .slice(0, 20);

    res.status(200).json(tags);
}
