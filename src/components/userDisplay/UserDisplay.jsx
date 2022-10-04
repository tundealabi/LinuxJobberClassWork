import UserForm from "../userForm/UserForm"
import './userDispay.css'
import contact from '../../assets/contact.svg'

const UserDisplay = () => {
  return (
    <div className="usr-dsp-cnt">
      <div className="profileIcon">
         <div className="iconsdiv">
            <img src={contact} alt="" className="icons" />
         </div>
         <p>Your Profile</p>
      </div>
      <UserForm />
      <UserForm />
      <UserForm />
    </div>
  )
}

export default UserDisplay;