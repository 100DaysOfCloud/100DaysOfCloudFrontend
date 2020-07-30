import React from 'react';

import { Link } from 'gatsby';

import { IoMdArrowRoundBack } from 'react-icons/io';

export default function BackButton(props) {
    return (
        <span className="fixed">
            <Link to={props.link}>
                <IoMdArrowRoundBack size={32} />
            </Link>
        </span>
    );
}
