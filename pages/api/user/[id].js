import { users } from '../../../data/users1.json';

export default function returnUser(req, res) {
    const id = req.query.id;

    const profile = users.find((entry) => {
        return entry.githubProfile == id;
    });

    res.status(200).json(profile);
}
