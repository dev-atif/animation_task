import React from 'react'
import Themetoggle from '../Themetoggle'

const Navbar = () => {
  return (
    <div>
        <div className=' py-4 flex justify-center border-b-2 border-black dark:border-white'>
            <Themetoggle/>
        </div>
    </div>
  )
}

export default Navbar