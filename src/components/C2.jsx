import React from 'react'

function C2(props) {
    const {name,city}=props;    // Destructure props into name and city
    return (
    <div>
        <p>hello my name is {name} . i am from {city}.</p>
    </div>
  )
}

export default C2   