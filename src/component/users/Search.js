import React, { Component } from 'react'

export class search extends Component {
    state = {
        text:''
    }

    onChange = (e) =>{
        this.setState({text: e.target.value});
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);

        this.setState({text:''})
    }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
            <input type="text" value={this.state.text} onChange={this.onChange} name="text" placeholder="Search Users..."/>
            <input type="submit" value='Search' className='btn btn-dark btn-block'/>
        </form>
      </div>
    )
  }
}

export default search