import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
const Profile = () => {
  let navigate = useNavigate()
  let {id} = useParams()

  return (
    <div>
      <div>Profile</div>
      <h3> {id} </h3>
      <button onClick={()=>{navigate('/')}}> Go to Homepage</button>
    </div>
  )
}

export default Profile