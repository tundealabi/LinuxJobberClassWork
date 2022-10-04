import './App.css'
import ColumnTwo from './components/column2/ColumnTwo'
import Nav from './components/nav/Nav'
import UserColumnOne from './components/userColumn/UserColumnOne'
import { Routes, Route } from "react-router-dom";
import Interests from './components/interests/Interests';
import UserDisplay from './components/userDisplay/UserDisplay';

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="profile-body maxwidth">
        <UserColumnOne />
        <Routes>
          <Route path='/' element={<ColumnTwo />} />
          <Route path='/interest' element={<Interests />} />
          <Route path='/my-profile' element={<UserDisplay />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
