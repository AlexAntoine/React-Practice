import React,{Fragment,Component}from 'react'
import Navbar from './component/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import Alert from './component/Alert';
import './App.css';
import axios from 'axios'


class App extends Component {
  state ={
    users:[],
    loading:false,
    alert:null

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
    const {users, loading,} =this.state;
    return (
      <div className='App'>
       <Navbar/>
       <div className='container'> 
       <Alert alert={this.state.alert}/>
       <Search setAlert={this.setAlert} searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true: false}/>
        <Users loading={loading} users={users}/>
       </div>
     
      </div>
    );
  }
 
}

export default App;
