import React from 'react'

const User = (props) => {
    const {name,age,gender}=props.data;
  return (
    <>
    <h1>User component </h1>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{gender}</h1>
    </>
  )
}

export default User;