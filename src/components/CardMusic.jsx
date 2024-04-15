import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdAlbum } from "react-icons/md";
import {Link } from 'react-router-dom'
const CardMusic = ({object}) => {
  return (
    
    <div className='border border-slate-300 rounded-md p-4'>
        <h1 className='text-lg bold'>Title Music</h1>
        <div className='flex gap-1 items-center'>
          <FaPlay/>
          <span>Track: hello</span>
        </div>
        <div className='flex gap-1 items-center'>
          <MdAlbum/>
          <span>Album: hello</span>
        </div>
        <div className='my-1'>
          <Link to={'/details'} className='block w-full text-center bg-slate-800 text-white py-2'>View Lyrics</Link>
        </div>
    </div>
    
  )
}

export default CardMusic