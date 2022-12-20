import React, { Component } from 'react'

export class Users extends Component {
    state ={
       users:[
        {
            "login": "defunkt",
            "id": 1,
            "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
            "url": "https://api.github.com/users/defunkt",
            "html_url": "https://github.com/defunkt",
        },

        {
            "login": "pjhyett",
            "id": 3,
            "node_id": "MDQ6VXNlcjM=",
            "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
            "url": "https://api.github.com/users/pjhyett",
            "html_url": "https://github.com/pjhyett",
        },

        {
            "login": "vanpelt",
            "id": 17,
            "node_id": "MDQ6VXNlcjE3",
            "avatar_url": "https://avatars.githubusercontent.com/u/17?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vanpelt",
            "html_url": "https://github.com/vanpelt",

        },

        {
            "login": "brynary",
            "id": 19,
            "node_id": "MDQ6VXNlcjE5",
            "avatar_url": "https://avatars.githubusercontent.com/u/19?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/brynary",
            "html_url": "https://github.com/brynary",
        }
       ]

      
    }
  render() {
    return (
      <div>Users</div>
    )
  }
}

export default Users