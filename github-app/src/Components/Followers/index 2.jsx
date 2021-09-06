import React from 'react';
import './Followers.scss'
function Followers(props) {
    const {followers,following,public_gists,public_repos} = props.userBio
    return (
        <div className="followers-container">
            <div className="followers">Followers: {followers}</div>
            <div className="following">Following: {following}</div>
            <div className="repo-count">Public repos: {public_gists}</div>
            <div className="gist-count">Public gists: {public_repos}</div>
        </div>
    );
}

export default Followers;