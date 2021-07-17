import React from 'react'

const ProfileComponent = (props) =>{
    return (
        <div>
            <h1>My dumb profile component</h1>
            <h1>{props.helloJelly}</h1>
            <h2>{props.name}</h2>
            {props.cars.map((car, idx) =>{
                return (
                <h2 key={idx}>{car}</h2>
                )
            })}
        </div>
    )
}

export default ProfileComponent