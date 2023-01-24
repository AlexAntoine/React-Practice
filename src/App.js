import React,{Fragment,useState}from 'react'
import Navbar from './component/Layout/Navbar';
import Users from './component/users/Users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './component/users/Search';
import User from './component/users/User';
import About from './component/Pages/About'
import Alert from './component/Layout/Alert';
import './App.css';
import GithubState from './context/github/GithubState';


const App= ()=> {

  // const [users, setUsers] = useState([])
  // const [user, setUser] = useState({})
  // const [loading, setLoading] = useState(false)
  // const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState(null)

   //Set Alert
   const showAlert = (msg, alertType)=>{

    setAlert({msg, alertType});
    setTimeout(()=>{

      setAlert(null)
    }, 5000);

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

              <Search setAlert={showAlert} />
              <Users/>
          </Fragment>
        }/>

        <Route path='/about' element={<About/>} />
        <Route path='/user/:login' element={<User/>}></Route>

       </Routes>

       </div>
       
     
      </div>
      </Router>
      </GithubState>
      
    );
  
};

export default App;
