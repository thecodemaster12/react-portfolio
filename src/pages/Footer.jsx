import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
            <footer className='bg-black text-white min-h-[8vh] flex items-center justify-between px-5 font-base text-sm capitalize'>
                <div className="hidden gap-5 md:flex">
                    <a target='_blank' href="https://www.facebook.com/saifurrahman.shihab.5/">facebook</a>
                    <a target='_blank' href="">Instagram</a>
                    <a target='_blank' href="https://bd.linkedin.com/in/saifur-rahman-shihab">linkedin</a>
                    <a target='_blank' href="https://github.com/thecodemaster12">Github</a>
                </div>
                <div className="md:hidden flex gap-1">
                    <FacebookIcon className='' />
                    <InstagramIcon className='' />
                    <LinkedInIcon className='' />
                    <GitHubIcon className='' />
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                </div>
                <p>Made With ❤️</p>
            </footer>
        </>
    )
}

export default Footer