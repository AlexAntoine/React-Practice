import React,{Fragment,useState}from 'react'
import Navbar from './component/Layout/Navbar';
import Users from './component/users/Users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './component/users/Search';
import User from './component/users/User';
import About from './component/Pages/About'
import Alert from './component/Layout/Alert';
import './App.css';
import axios from 'axios';
import GithubState from './context/github/GithubState';


const App= ()=> {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState(null)

  //Search Github users
 const searchUsers = async(text)=>{

    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUsers(res.data.items)
    setLoading(false)
  }

  //Get Single Github User
  const getUser = async (username) => {

    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(`App.js line 48: `,res);

    setUser(res.data);
    setLoading(false);

  }
  
  //Get Users repos
  const getUserRepos = async (username) => {

    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(`App.js line 48: `,res);

    setRepos(res.data);
    setLoading(false)
    
  }

   //Set Alert
   const showAlert = (msg, alertType)=>{

    setAlert({msg, alertType});
    setTimeout(()=>{

      setAlert(null)
    }, 5000);

   }
  //Clear users from state
  const clearUsers = ()=>{
    setUsers([])
    setLoading(false)
  
  }

 
  return (
    <GithubState>
      <Router>
      <div className='App'>
       <Navbar/>
       <div className='container'> 
       <Alert alert={alert}/>

       <Routes>

        <Route path='/' element={
          <Fragment>

              <Search setAlert={showAlert} searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true: false}/>
              <Users loading={loading} users={users}/>

          </Fragment>
        }/>

        <Route path="/user/:login" element={props =>(

          <User {...props} repos={repos} getUserRepos={getUserRepos()} getUser={getUser()} user={user} loading={loading}/>

        )} />

        {/* <Route path="/user/:login" element={(

        <User repos={repos} getUserRepos={getUserRepos} getUser={getUser} user={user} loading={loading}/>

        )}/> */}

        <Route path='/about' element={<About/>} />

       </Routes>

       </div>
       
     
      </div>
      </Router>
      </GithubState>
      
    );
  
};

export default App;
