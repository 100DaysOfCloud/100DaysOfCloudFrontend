import React, { Component } from 'react';
import { Link } from 'gatsby';
import AccountDropdown from './AccountDropdown';
import logo from '../assets/banner.png';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedin: true };
    }

    render() {
        return (
            <div className="pt-10 max-w-8xl m-auto">
                <div className="flex items-center justify-between">
                    <img
                        className="h-32"
                        src={logo}
                        alt="#100DaysOfCloud Logo"
                    />
                    <div className="flex items-center">
                        <Link to="journeyers" className="ml-10 text-xl">
                            Journeyers
                        </Link>
                        <Link to="blog" className="ml-10 text-xl">
                            Blog
                        </Link>
                        <Link to="rules" className="ml-10 text-xl">
                            Rules
                        </Link>
                        <Link to="faqs" className="ml-10 text-xl">
                            FAQs
                        </Link>
                        {this.state.loggedin ? (
                            <span className="ml-10">
                                <AccountDropdown />
                            </span>
                        ) : (
                            <Link to="/log-in" className="ml-10 text-xl">
                                <span className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                                    Log In
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
