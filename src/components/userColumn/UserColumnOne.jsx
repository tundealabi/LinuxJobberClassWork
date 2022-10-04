import profpics from '../../assets/paultol.png'
import ImgIcon from '../../assets/imageIcon.svg'
import contact from '../../assets/contact.svg'
import courses from '../../assets/courses.svg'
import attendance from '../../assets/attendance.svg'

const UserColumnOne = () => {
  return (
   <div className="user">
      <div className="pfl-img-div">
         <img src={profpics} alt="pp" className="profile-photo" />
         <img src={ImgIcon} alt="pp" className="photo-icon" />
      </div>
      <h1 className="username"> TonniPaul </h1>
      <div className="colums">
         <div className="column-flex">
            <div className="iconsdiv">
               <img src={contact} alt="" className="icons" />
            </div>
            <p className="name-tags"> Profile </p>
            <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
         </div>
         <div className="column-flex">
            <div className="iconsdiv">
               <img src={courses} alt="" className="icons" />
            </div>
            <p className="name-tags"> Courses </p>
            <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
         </div>
         <div className="column-flex">
            <div className="iconsdiv">
               <img src={attendance} alt="" className="icons" />
            </div>
            <p className="name-tags"> Attendance </p>
            <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
         </div>
         <div className="logoutIcon">
            <span className="material-symbols-outlined">logout</span>
            <span className="lgtxt">Logout</span>
         </div>
      </div>
 </div>
 
  )
}

export default UserColumnOne;