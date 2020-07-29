import React from 'react';
import { Link } from 'gatsby';
import { NameAndHandle, ProfileImage, ProfileBio } from './ProfileComponents';



const ProfileContent = (props, contactDirection) => {
    let cardSize = 'max-w-lg';
	let cardClass;
	let cardPadding = "p-4";
	let cardShadow = "shadow";

    if (typeof props['size'!='undefined']){
        if (props.size === 'small') {
            cardSize = 'max-w-xs';
        }
    }

    if (typeof props['bio'] != 'undefined') {
        cardSize = 'max-w-3xl';
	}

	if (typeof props['padding'] != 'undefined') {
        if (props.padding==='false'){
			cardPadding = "";
		}
	}

	if (typeof props['shadow'] != 'undefined') {
        if (props.shadow==='false'){
			cardShadow = "";
		}
	}


	
    cardClass =
        'flex flex-shrink items-center justify-center rounded-lg w-full '+cardPadding+' '+cardShadow+' '+cardSize;

    if (contactDirection === 'left') {
        return (
            <div className={cardClass}>
                <NameAndHandle
                    name={props.name}
                    handle={props.handle}
                    size={props.size}
                    contactDirection={contactDirection}
                />
                <ProfileImage size={props.size} avatar={props.avatar} />
                <ProfileBio bio={props.bio} />
            </div>
        );
    } else if (contactDirection === 'right') {
        return (
            <div className={cardClass}>
                <ProfileImage size={props.size} avatar={props.avatar} />
                <NameAndHandle
                    name={props.name}
                    handle={props.handle}
                    size={props.size}
                    contactDirection={contactDirection}
                />
            </div>
        );
    } else if (contactDirection === 'up') {
        return (
            <div className={cardClass}>
                <div className="col text-center">
                    <NameAndHandle
                        name={props.name}
                        handle={props.handle}
                        size={props.size}
                        contactDirection={contactDirection}
                    />
                    <ProfileImage size={props.size} avatar={props.avatar} />
                </div>
            </div>
        );
    } else if (contactDirection === 'down') {
        return (
            <div className={cardClass}>
                <div className="col text-center">
                    <ProfileImage size={props.size} avatar={props.avatar} />
                    <NameAndHandle
                        name={props.name}
                        handle={props.handle}
                        size={props.size}
                        contactDirection={contactDirection}
                    />
                </div>
            </div>
        );
    }
};


const ProfileBadge = (props) => {
    let contactDirection = 'left'; //default position

    if (typeof props['contactDirection'] != 'undefined') {
        contactDirection = props.contactDirection;
    }

    return (
        <div>
            <Link to="#">{ProfileContent(props, contactDirection)}</Link>
        </div>
    );
};

export default ProfileBadge;
