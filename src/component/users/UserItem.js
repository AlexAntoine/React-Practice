import React, { Component } from 'react'

export class userItem extends Component {
  render() {
    const {login, avatar_url, html_url} = this.props.user;

    return (
      <div className='card text-center'>

        <img src={avatar_url} className="round-img" style={{width:'60px'}} alt="" ></img>
        <h3>{login}</h3>

        <div>
            <a href={html_url} rel="noopener"  target="_blank" className='btn btn-dark btn-sm my-1'>More</a>
        </div>
      </div>
    )
  }
}

export default userItem