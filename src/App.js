import React,{Fragment,Component}from 'react'
import Navbar from './component/Layout/Navbar';
import Users from './component/users/Users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './component/users/Search';
import User from './component/users/User';
import About from './component/Pages/About'
import Alert from './component/Layout/Alert';
import './App.css';
import axios from 'axios'


class App extends Component {
  state ={
    users:[],
    loading:false,
    alert:null,
    user:{},
    repos:[]

  }

  // async componentDidMount(){
  //   this.setState({loading:true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   console.log(res.data);

  //   this.setState({users: res.data, loading:false});
  // }

  //Search Github users
  searchUsers = async(text)=>{

    this.setState({loading:true});

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading:false});
  }

  //Get Single Github User
  getUser = async username => {

    this.setState({loading:true});

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(`App.js line 48: `,res);

    this.setState({user: res.data, loading:false});
    console.log('GetUser')
  }
  
  //Get Users repos
  getUserRepos = async username => {

    this.setState({loading:true});

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(`App.js line 48: `,res);

    this.setState({repos: res.data, loading:false});
    console.log('GetUser')
  }

  //Clear users from state
  clearUsers = () => this.setState({loading:false, users:[]})

  //Set Alert

  setAlert = (msg, alertType) =>{
    this.setState({alert: {msg, alertType}});

    setTimeout(()=>{

      this.setState({alert:null})
    }, 5000)
  }

  render(){
    const {users, loading, repos, user} =this.state;
    return (
      <Router>
      <div className='App'>
       <Navbar/>
       <div className='container'> 
       <Alert alert={this.state.alert}/>

       <Routes>

        <Route path='/' element={
          <Fragment>
              <Search setAlert={this.setAlert} searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true: false}/>
              <Users loading={loading} users={users}/>
          </Fragment>
        }/>

        <Route path="/user/:login" render={props =>(
          <User {...props} repos={repos} getUserRepos={this.getUserRepos} getUser={this.getUser} user={user} loading={loading}/>
        )} />

        <Route path='/about' element={<About/>} />

       </Routes>

       </div>
       
     
      </div>
      </Router>

      
    );
  }
 
}

export default App;
