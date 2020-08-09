import React from 'react';
import ProfileBadge from './ProfileBadge/ProfileBadge';
import ProgressBar from './ProgressBar/ProgressBar';
import { Link } from 'gatsby';
import ReactTooltip from 'react-tooltip';

const useSortableData = (entries, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedEntries = React.useMemo(() => {
        let sortableEntries = [...entries];
        if (sortConfig !== null) {
            sortableEntries.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableEntries;
    }, [entries, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { entries: sortedEntries, requestSort, sortConfig };
};

const pluralizeDays = (number) => {
    if (number === 1) {
        return '1 day';
    }
    return number + ' days';
};

const JTable = (props) => {
    const { entries, requestSort, sortConfig } = useSortableData(props.users);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <div className="container">
            <table className="table-auto w-5/6 divide-y divide-gray-200 ">
                <thead className="text-center">
                    <tr>
                        <th className="jtable-header">
                            <button
                                type="button"
                                onClick={() => requestSort('full_name')}
                                className={getClassNamesFor('full_name')}
                            >
                                Name
                            </button>
                        </th>

                        <th className="jtable-header">
                            <button
                                type="button"
                                onClick={() => requestSort('github_username')}
                                className={getClassNamesFor('github_username')}
                            >
                                Github Username
                            </button>
                        </th>
                        <th className="jtable-header">
                            <button
                                type="button"
                                onClick={() => requestSort('twitter_username')}
                                className={getClassNamesFor('twitter_username')}
                            >
                                Twitter Username
                            </button>
                        </th>

                        <th className="jtable-header">
                            <button
                                type="button"
                                onClick={() => requestSort('days_completed')}
                                className={getClassNamesFor('days_completed')}
                            >
                                Days Completed
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-center">
                    {entries.map((user) => (
                        <tr key={user.full_name}>
                            <td className="text-left">
                                <ProfileBadge
                                    name={user.full_name}
                                    handle=""
                                    avatar={user.avatar_image}
                                    contactDirection="right"
                                    size="small"
                                    shadow="false"
                                    padding="false"
                                />
                            </td>
                            <td>
                                <Link
                                    to={
                                        'https://github.com/' +
                                        user.github_username
                                    }
                                >
                                    {user.github_username}
                                </Link>
                            </td>
                            <td>
                                <Link
                                    to={
                                        'https://twitter.com/' +
                                        user.twitter_username
                                    }
                                >
                                    @{user.twitter_username}
                                </Link>
                            </td>

                            <td>
                                <a data-tip data-for={user.full_name}>
                                    <ProgressBar
                                        key={user.full_name}
                                        bgcolor="#00695c"
                                        completed={Math.min(
                                            user.days_completed,
                                            100
                                        )}
                                    />
                                </a>
                                <ReactTooltip id={user.full_name} type="info">
                                    <span>
                                        {' '}
                                        {pluralizeDays(
                                            user.days_completed
                                        )}{' '}
                                    </span>
                                </ReactTooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JTable;
