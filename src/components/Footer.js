import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="w-full text-center p-4 pin-b mt-8 mb-8">
            <div>
                <img
                    className="f-32"
                    src="./banner.png"
                    alt="#100DaysOfCloud Logo"
                />
            </div>

            <div>
                <Link to="#" className="ml-10 text-l">
                    Our app
                </Link>
                <Link to="#" className="ml-10 text-l">
                    About us
                </Link>
                <Link to="#" className="ml-10 text-l">
                    Privacy
                </Link>
                <Link to="#" className="ml-10 text-l">
                    Contact us
                </Link>
            </div>

            <div className="flex justify-center mt-4">
                <Link to="#">
                    <FaTwitter color="#00ACEE" size="2em" />
                </Link>
                <Link to="#" className="ml-10 ">
                    <FaGithub size="2em" />
                </Link>
                <Link to="#" className="ml-10 ">
                    <FaLinkedin color=" #0077B5" size="2em" />
                </Link>
                <Link to="#" className="ml-10 ">
                    <FaDiscord color="#738ADB" size="2em" />
                </Link>
            </div>

            <div className="mt-4">
                Made with{' '}
                <span role="img" aria-label="heart">
                    {' '}
                    ❤️{' '}
                </span>{' '}
                by the #100DaysOfCloud team
            </div>
        </div>
    );
}
