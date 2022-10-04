import './userForm.css';
import checked from '../../assets/checked.svg';

const UserForm = () => {
  return (
    <div className='userform-cont'>
      <div className="profile-checked topcheck">
        <img src={checked} alt="a" className="ccc" />
      </div>
      <div className="sub-uf-cnt">
         <div className="columnsss">
            <p className='prf-txt'>First Name</p>
         </div>
         <div className="columnsss">
            <p className='prf-txt'>Last Name</p>
         </div>
         <div className="columnsss">
            <p className='prf-txt'>Email</p>
         </div>
      </div>
    </div>
  )
}

export default UserForm


