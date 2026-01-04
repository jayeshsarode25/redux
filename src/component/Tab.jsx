import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/feature/searchSlice';

const Tab = () => {

    const tabs = ['photos','videos','gif'];

    const dispatch = useDispatch();

    const activeTab = useSelector(state => state.search.activeTab);


  return (
    <div className='flex gap-10 p-10'>
        {tabs.map(function(elem, idx){
            return <button 
            className={`${activeTab === elem ? 'bg-blue-600' : "bg-gray-700"} transition text-white px-3 py-2 rounded pointer-cursor active:scale-95`}
            key={idx}
            onClick={()=>{
              dispatch(setActiveTab(elem))
            }}
            >
              {elem}
            </button>
        })}
    </div>
  )
}

export default Tab