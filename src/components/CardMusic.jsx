import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdAlbum } from "react-icons/md";
import {Link } from 'react-router-dom'
const CardMusic = ({object}) => {
  return (
    
    <div className='border border-slate-300 rounded-md p-4'>
        <h1 className='text-lg bold my-2'>Title: {object.track.album_name}</h1>
        <div className='flex gap-1 items-start'>
          <FaPlay/>
          <span>Track: {object.track.track_name}</span>
        </div>
        <div className='flex gap-1 items-start'>
          <MdAlbum/>
          <span>{object.track.album_name}</span>
        </div>
        <div className='my-1'>
          <Link to={'/details/'+object.track.track_id} className='block w-full text-center bg-slate-800 text-white py-2'>View Lyrics</Link>
        </div>
    </div>
    
  )
}

export default CardMusic