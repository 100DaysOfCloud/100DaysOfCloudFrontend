import React from 'react';

const NameAndHandle = (props) => {
    let nameImagePadding = '8';
    let textMargin = 'mr-';

    if (props.size === 'small') {
        nameImagePadding = '4';
    }
    
    if (props.contactDirection === 'right') {
        textMargin = 'ml-';
    }

    if (props.contactDirection === 'up' || props.contactDirection === 'down') {
        textMargin = '';
        nameImagePadding = '';
    }

    return (
        <div className={'text-sm ' + textMargin + nameImagePadding}>
            <h2 className="text-gray-900 leading-none">{props.name}</h2>
            <p className="text-gray-600">{props.handle}</p>
        </div>
    );
};

const ProfileImage = (props) => {
    let imageSize = 'h-40 w-40';

    if (props.size === 'small') {
        imageSize = 'h-20 w-20';
    }
    return (
        <div
            className={
                'inline-flex flex-shrink-0 shadow-lg border border-gray-200 rounded-full overflow-hidden ' +
                imageSize
            }
        >
            <img src={props.avatar} alt="" className="h-full w-full" />
        </div>
    );
};

const ProfileBio = (props) => {
    const truncate = (str) =>
        str.length > maxTextLength
            ? str.substring(0, maxTextLength - 3) + '...'
            : str;
    let maxTextLength = 250;
    let bio = '';

    if (typeof props['bio'] != 'undefined') {
        bio = truncate(props.bio);
    }
    if (bio) {
        return (
            <div className="container w-1/2">
                <p className="text-xs text-gray-700 text-left ml-8 mt-3">
                    {' '}
                    {bio}{' '}
                </p>
            </div>
        );
    } else {
        return '';
    }
};

export { NameAndHandle, ProfileImage, ProfileBio };
