import { users } from '../../../data/users.json';




export default function returnSortedUser(req, res) {
    // Catch all possible routes
    const { limit } = req.query;


    // If there's no slug, default to 10
    const number = limit ? limit : 10;

    res.status(200).json(users.slice(0, number));
}
