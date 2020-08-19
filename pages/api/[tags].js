import { articles } from '../data/articles.json';

import _ from 'lodash';

export default function returnTags(req, res) {
    const { limit } = req.query;

    const number = limit ? limit : undefined;

    const tags = _(articles)
        .countBy('tags')
        .map(function (count, tag) {
            return {
                tag: tag,
                count: count,
            };
        })
        .orderBy('count', 'desc')
        .slice(0, number);

    res.status(200).json(tags);
}
