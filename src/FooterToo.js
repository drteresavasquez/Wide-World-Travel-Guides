import React from 'react';

function FooterTwo(props) {
    return (
        <a href={props.link}>
            {props.name}
        </a>
    );
}
export default FooterTwo;