import { users } from '../../data/users1.json';

export default (req, res) => {
    res.status(200).json(users);
};
