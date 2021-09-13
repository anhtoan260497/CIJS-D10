import React from 'react';
import './ShortLink.scss'

function ShortLink(props) {
    return (
        <div className="shortlink-container">
            <h1>Short Link Is</h1>
            <a style={{textDecoration:"none"}} href={`https://www.${props.link}`} target="_blank">{props.link}</a>
        </div>
    );
}

export default ShortLink;