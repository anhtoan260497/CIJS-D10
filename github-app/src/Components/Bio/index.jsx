import React from 'react';
import './Bio.scss'
function Bio(props) {
    const {avatar_url,name,login,html_url} = props.userBio
    console.log(props)
    return (
        <div className="bio">
            <div className="image">
                <img src={avatar_url} alt="" />
                <h4>{name}</h4>
            </div>
            <div className="bio-info">
                <h3>Bio</h3>
                <p className="name">{name}</p>
                <p className="username">Username: {login}</p>
                <a className="link" href={html_url} >Visit Github Profile</a>
            </div>
        </div>
    );
}

export default Bio;