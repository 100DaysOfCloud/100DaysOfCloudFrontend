import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import JTable from '../components/JourneyersTable';
import data from '../data/users2.json';
import '../styles.css';

export default function TablePage() {
    const [count, setCount] = React.useState(0);
    const numberOfUsers = data['users'].length;
    const users = data['users'].slice(count, count + 10);

    return (
        <div className="max-w-8xl m-auto">
            <Header />

            <div className="site">
                <div className="site-content">
                    <JTable users={users} />


                    <div className="show-more">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() =>
                                setCount((count + 10) % numberOfUsers)
                            }
                        >
                            show more
                        </button>


                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
