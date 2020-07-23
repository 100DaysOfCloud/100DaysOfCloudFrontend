import React, { Component } from 'react';
import { Link } from 'gatsby';

class AccountDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked,
        });
    };

    handleClose = () => {
        this.setState({
            clicked: false,
        });
    };

    escFunction = (event) => {
        if (event.keyCode === 27) {
            this.setState({
                clicked: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.escFunction, false);
    }

    render() {
        return (
            <div className="relative">
                <button
                    className={
                        'relative z-10 block h-16 w-16 rounded-full overflow-hidden border-2 focus:outline-none' +
                        (this.state.clicked ? ' focus:border-gray-500' : '')
                    }
                    onClick={this.handleClick}
                >
                    <img
                        className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                        alt="Your profile"
                    />
                </button>
                <button
                    onClick={this.handleClose}
                    className={
                        this.state.clicked
                            ? 'fixed inset-0 h-full w-full cursor-default focus:outline-0'
                            : 'hidden '
                    }
                    tabindex="-1"
                />
                <div
                    className={
                        (this.state.clicked ? 'block ' : 'hidden ') +
                        'bg-gray-200 w-48 py-2 mt-4 rounded-lg shadow-xl absolute right-0'
                    }
                >
                    <Link
                        href="/settings"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-400"
                    >
                        Account setting
                    </Link>
                    <Link
                        href="/submit"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-400"
                    >
                        Submit an article
                    </Link>
                    <Link
                        href="/log-out"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-400"
                    >
                        Log out
                    </Link>
                </div>
            </div>
        );
    }
}

export default AccountDropdown;
