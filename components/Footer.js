import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='w-full text-center p-4 pin-b mt-8 mb-8'>
            <div className='flex justify-center'>
                <img
                    className='h-32'
                    src='./banner.png'
                    alt='#100DaysOfCloud Logo'
                />
            </div>

            <div className='flex justify-center mt-4'>
                <p href='/about' className='mx-4'>
                    About us
                </p>
                <p href='/privacy' className='mx-4'>
                    Privacy
                </p>
                <p href='/contact' className='mx-4'>
                    Contact us
                </p>
            </div>

            <div className='flex justify-center mt-4'>
                <p href='#' className='mx-8'>
                    <FaTwitter color='#00ACEE' size='2em' />
                </p>
                <p href='#' className='mx-8'>
                    <FaGithub size='2em' />
                </p>
                <p href='#' className='mx-8'>
                    <FaLinkedin color=' #0077B5' size='2em' />
                </p>
                <p href='#' className='mx-8'>
                    <FaDiscord color='#738ADB' size='2em' />
                </p>
            </div>

            <div className='mt-4'>
                Made with
                <span role='img' className='mx-2' aria-label='heart'>
                    ❤️
                </span>
                by the #100DaysOfCloud team
            </div>
        </div>
    );
}
