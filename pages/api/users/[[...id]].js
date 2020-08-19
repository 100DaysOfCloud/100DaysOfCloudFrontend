import { users } from '../../../data/users.json';

export default function returnUser(req, res) {
    const { id, limit } = req.query;

    const number = limit ? limit : users.length;

    if (id) {
        res.status(200).json(
            users.find((entry) => {
                return entry.githubProfile == id;
            })
        );
    } else {
        res.status(200).json(users.slice(0, number));
    }
}
