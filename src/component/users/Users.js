import React, { Component } from 'react'
import UserItem from './UserItem';

export class Users extends Component {
    state ={
       users:[
        {
            login: "defunkt",
            "id": 1,
            "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
           
            "html_url": "https://github.com/defunkt",
        },

        {
            login: "pjhyett",
            "id": 3,
            
            "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
          
            "html_url": "https://github.com/pjhyett",
        },

        {
            login: "vanpelt",
            "id": 17,
            
            "avatar_url": "https://avatars.githubusercontent.com/u/17?v=4",
            
            "html_url": "https://github.com/vanpelt",

        },

        {
            login: "brynary",
            "id": 19,
           
            "avatar_url": "https://avatars.githubusercontent.com/u/19?v=4",
            
            "html_url": "https://github.com/brynary",
        }
       ]

      
    }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user =>(
            <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

const userStyle = {
 display:'grid',
 gridTemplateColumns: 'repeat(3, 1fr)',
 gridGap: '1rem'  
}

export default Users