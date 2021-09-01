import React, { Component } from 'react';
import Bio from '../Bio';
import Followers from '../Followers'
import './UserBio.scss'
class UserBio extends Component {
    render() {
        const {userBio} = this.props
        return (
            <div className="user-bio">
                <Bio userBio={userBio}/>
                <Followers userBio={userBio}/>
            </div>
        );
    }
}

export default UserBio;