import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex items-baseline border m-auto top-0 sticky p-4 w-4/5'>
            <h1  className='text-4xl font-bold text-foreground'>Isaac N'cho</h1>
            <div className='flex-1'/>
                <ul>
                    <Link to='https://github.com/Isaac1676'>
                        <FontAwesomeIcon icon={faGithub} className='text-foreground size-6 px-4'/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/isaac-n-cho-6a9a2a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                        <FontAwesomeIcon icon={faLinkedin} className='text-foreground size-6' />
                    </Link>
                </ul>
        </header>
    )
}

export default Header