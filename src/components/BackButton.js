import React, { Component } from 'react';

import { Link } from 'gatsby';

import { IoMdArrowRoundBack } from 'react-icons/io';

class BackButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className='fixed'>
                <Link to={this.props.link}>
                    <IoMdArrowRoundBack size={32} />
                </Link>
            </span>
        );
    }
}

export default BackButton;
