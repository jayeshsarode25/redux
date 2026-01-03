import React from 'react'

const Tab = () => {

    const tabs = ['photos','videos','gif'];


  return (
    <div className='flex gap-10 p-10'>
        {tabs.map(function(elem, idx){
            return <button key={idx}>{elem}</button>
        })}
    </div>
  )
}

export default Tab