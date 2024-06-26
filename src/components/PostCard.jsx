import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-900 text-white rounded-xl p-4 hover:bg-gray-950  hover:scale-105 duration-300 drop-shadow-xl '>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.previewFile(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard