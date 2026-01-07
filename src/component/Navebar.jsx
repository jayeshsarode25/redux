import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
        <div className="flex justify-between items-center py-5 px-10">
        <h2 className="text-2xl font-semibold">Media Search</h2>
        <div className="flex gap-3 items-center">
          <Link className="text-lg font-medium bg-white text-black px-4 py-2 rounded cursor-pointer active:scale-95" to="/">Search</Link>
          <Link className="text-lg font-medium bg-white text-black px-4 py-2 rounded cursor-pointer active:scale-95" to="/collection">Collection</Link>
        </div>
      </div>
    </div>
  )
}

export default Navebar