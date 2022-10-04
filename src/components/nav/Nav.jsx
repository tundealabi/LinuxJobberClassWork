import "./nav.css"
import logo from '../../assets/logo.svg'

const Nav = () => {
  return (
   <div className="nav--div">
      <div className="main-nav">
         <nav className="nav">
            <img src={logo} alt="logo" className="logo" />
            <p className="profile--header"> Classroom Profile</p>
            <a href="index.html" className="go-to">
            <p className="go-to-text">Go to Classroom</p>
            <span className="material-symbols-outlined"> chevron_right </span>
            </a>
         </nav>
      </div>
   </div>
  )
}

export default Nav