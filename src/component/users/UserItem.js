import React from 'react'
import {Link } from 'react-router-dom';

const UserItem = ({user: {login, avatar_url, html_url}}) => {
    // const {login, avatar_url, html_url} = props.user;

    return (
      <div className='card text-center'>

        <img src={avatar_url} className="round-img" style={{width:'60px'}} alt="" ></img>
        <h3>{login}</h3>

        <div>
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
          {/* <a href={html_url} rel="noopener"  target="_blank" className='btn btn-dark btn-sm my-1'>More</a> */}
        </div>
      </div>
    )
}

export default UserItem