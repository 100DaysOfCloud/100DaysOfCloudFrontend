import React from 'react';
import { NameAndHandle, ProfileImage } from './ProfileComponents';
import { FaAlignRight } from 'react-icons/fa';

const ProfileBadge = (props) => {
    const textAlign = {
        right: 'left',
        left: 'right',
        top: 'center',
        bottom: 'center',
    };

    const marginDirection = {
        right: 'ml',
        left: 'mr',
        top: 'mb',
        bottom: 'mt',
    };

    const marginSize = {
        sm: 2,
        md: 2,
        lg: 4,
        xl: 8,
    };

    // Defaults to right if nothing is provided or if wrong direction is provided
    const validate = ['right', 'left', 'top', 'bottom'].includes(props.dir);
    const direction = validate ? props.dir : 'right';

    // Change order of name/handle and profile image
    const position = ['right', 'bottom'].includes(direction)
        ? 'order-last'
        : 'order-first';

    // Adapt flexbox to row or column based on direction
    const orientation = ['top', 'bottom'].includes(direction) ? 'flex-col' : '';

    // Generate margin based on text direction and image size
    const margin = `${marginDirection[direction]}-${marginSize[props.size]}`;

    return (
        <div className={`flex ${orientation} items-center`}>
            <div
                className={`${position} w-auto text-${textAlign[direction]} ${margin}`}>
                <NameAndHandle
                    name={props.name}
                    handle={props.handle}
                    size={props.size}
                />
            </div>
            <ProfileImage
                id={props.id}
                name={props.name}
                avatar={props.avatar}
                size={props.size}
            />
        </div>
    );
};

export default ProfileBadge;
