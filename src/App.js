import React,{Fragment}from 'react'
import Navbar from './component/Layout/Navbar';
import Users from './component/users/Users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './component/users/Search';
import User from './component/users/User';
import About from './component/Pages/About'
import Alert from './component/Layout/Alert';
import './App.css';
import GithubState from './context/github/GithubState';
import AlertState from "./context/alert/AlertState"


const App= ()=> {

  // const [users, setUsers] = useState([])
  // const [user, setUser] = useState({})
  // const [loading, setLoading] = useState(false)
  // const [repos, setRepos] = useState([])
  // const [alert, setAlert] = useState(null)

  return (
    <GithubState>
      <AlertState>
      <Router>
      <div className='App'>
       <Navbar/>
       <div className='container'> 
       <Alert/>

       <Routes>

        <Route path='/' element={
          <Fragment>

              <Search/>
              <Users/>
          </Fragment>
        }/>

        <Route path='/about' element={<About/>} />
        <Route path='/user/:login' element={<User/>}/>

       </Routes>

       </div>
       
     
      </div>
      </Router>
      </AlertState>
      </GithubState>
      
    );
  
};

export default App;
