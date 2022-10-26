import React from 'react'
import Me from "./itsme.jpg"

const ProfilePhoto = () => {
  return (
    <div>
            <img src={Me} className='imga' alt="My Photo" />
        </div>
  )
}

export default ProfilePhoto