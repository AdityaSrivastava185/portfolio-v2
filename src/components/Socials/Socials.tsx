import React from 'react'
import GithubSocial from './GithubSocial'
import LinkedinSocial from './LinkedinSocial'
import PortfolioSocial from './PortfolioSocial'
import TwitterSocial from './TwitterSocial'

const Socials = () => {
    return (
        <div>
            <div className="flex flex-row items-center space-x-2">
                <LinkedinSocial />
                <GithubSocial />
                <PortfolioSocial />
                <TwitterSocial />
            </div>
        </div>
    )
}

export default Socials
