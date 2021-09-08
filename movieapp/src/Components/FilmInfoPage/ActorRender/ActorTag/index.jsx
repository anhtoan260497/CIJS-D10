import React from 'react';
import './ActorTag.scss'

function ActorTag(props) {
const {character,name,profile_path} = props.actorInfo
    return (
        <div className="actor-tag">
            {profile_path !== null ? <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt=""/> :<img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt=""/>}
            <p>{name}</p>
            <p className="name">{character}</p>
        </div>
    );
}

export default ActorTag;