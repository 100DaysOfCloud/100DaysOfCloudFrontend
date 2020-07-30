import React from 'react';

import { FaMedium, FaDev, FaLinkedin } from 'react-icons/fa';

export default function ArticleThumbnail(props) {
    const components = {
        medium: FaMedium,
        dev: FaDev,
        linkedin: FaLinkedin,
    };

    const Provider = components[props.provider];

    return (
        <div>
            <div>
                <div className="absolute ml-2 mt-2 bg-gray-100 rounded-lg">
                    {Provider && <Provider size={64} />}
                </div>
                <img src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </div>
            <div>
                <p className="text-2xl text-bold">An article title</p>
                <p className="text-xl">An article subtitle</p>
            </div>
        </div>
    );
}
