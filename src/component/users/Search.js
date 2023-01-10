import React, { useState } from 'react'

const Search = ({searchUsers, showClear,clearUsers, setAlert}) => {

  const [text,setText] = useState('');

    const onChange = (e) =>{
        setText(e.target.value)
    }

   const onSubmit = (e) =>{
        e.preventDefault();

        if(text === ''){
          setAlert('Please enter something', 'light')
        }else{
          searchUsers(text);

          setText('');
        }
    }

    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
            <input type="text" value={text} onChange={onChange} name="text" placeholder="Search Users..."/>
            <input type="submit" value='Search' className='btn btn-dark btn-block'/>
        </form>

        {showClear && (

          <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
        )}
       
      </div>
    )
  
}

export default Search