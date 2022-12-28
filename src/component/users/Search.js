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

        if(this.state.text === ''){
          this.props.setAlert('Please enter something', 'light')
        }else{
          this.props.searchUsers(this.state.text);

          this.setState({text:''})
        }
    }


  render() {
    const {showClear, clearUsers} = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
            <input type="text" value={this.state.text} onChange={this.onChange} name="text" placeholder="Search Users..."/>
            <input type="submit" value='Search' className='btn btn-dark btn-block'/>
        </form>

        {showClear && (

          <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
        )}
       
      </div>
    )
  }
}

export default search