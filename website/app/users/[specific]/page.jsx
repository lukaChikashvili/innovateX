"use client"

const User = ({ params }) => {
  return (
    <div>
         <h1>{params.specific}</h1>
    </div>
  )
}

export default User
