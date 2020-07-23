import React, { Component } from 'react';

import { Link } from 'gatsby';

import { IoMdArrowRoundBack } from 'react-icons/io';

export default class BackButton extends Component {
    render() {
        return (
            <span className="fixed">
                <Link to={this.props.link}>
                    <IoMdArrowRoundBack size={32} />
                </Link>
            </span>
        );
    }
}
