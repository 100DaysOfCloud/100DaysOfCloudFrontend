import { users } from '../../../../data/users.json';

export default function returnUser(req, res) {
    const { limit } = req.query;

    const number = limit ? limit : users.length;
    const sortedUsers = users.sort((a, b) => {
        let date_a = new Date(a.dateJoined),
            date_b = new Date(b.dateJoined);

        if (date_a < date_b) return 1;
        if (date_a > date_b) return -1;
    });

    res.status(200).json(sortedUsers.slice(0, number));
}
