import { users } from '../../../data/users.json';

export default function returnSortedUser(req, res) {
    // Catch all possible routes
    const { limit } = req.query;

    users.sort(function (a, b) {
        return (
            b.githubScore + b.twitterScore - (a.githubScore + a.twitterScore)
        );
    });

    // If there's no slug, default to 10
    const number = limit ? limit : 10;

    res.status(200).json(users.slice(0, number));
}
