import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/feature/searchSlice';

const SearchBar = () => {

    const [text, setText] = useState("")


    const dispath = useDispatch();


    const submitHandler = (e)=>{
        e.preventDefault();

        dispath(setQuery(text));
        
        setText("");
    }

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex p-10 gap-4'>
            <input 
            required 
            type="text" 
            placeholder='Search Here...' 
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            className='border-2 px-3 py-2 rounded outline-none'
            />


            <button className='border-2 px-3 py-2 rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar