import React from 'react';
import Moment from 'react-moment';

export default function IdCard(props) {
    return (
        <>
            <img src={props.picture}/>
            <p><span>First name: </span>{props.firstName}</p>
            <p><span>Gender: </span>{props.gender}</p>
            <p><span>Height: </span>{JSON.stringify(props.height) + "cm"}</p>
            <p><span>Birth: </span><Moment format="ddd MMM Do YYYY ">{props.birth}</Moment></p>
        </>
    )
}
