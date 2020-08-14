import { articles } from '../../../data/articles.json';

import _ from 'lodash';

export default function returnFilteredArticles(req, res) {
    // Catch all possible routes
    const tags = _(articles).groupBy('tags').keys();

    res.status(200).json(tags);
}
