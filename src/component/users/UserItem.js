import React, { Component } from 'react'

export class userItem extends Component {
  
    state = {
        id:"id",
        login:"mojombo",
        avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
        html_url:"https://github.com/mojombo"
    }
  render() {
    const {login, avatar_url, html_url} = this.state;

    return (
      <div className='card text-center'>

        <img src={avatar_url} className="round-img" style={{width:'60px'}}></img>
        <h3>{login}</h3>

        <div>
            <a href={html_url} target="_blank" className='btn btn-dark btn-sm my-1'>More</a>
        </div>
      </div>
    )
  }
}

export default userItem