import React from 'react'
import { MusicImage } from '../../icon/image'
import { Link } from 'react-router-dom'

const CollectionList = () => {
  return (
    <div>
        <div className="">
            <div className="flex justify-between my-2">
                <h1 className="text-2xl font-bold">Collection List</h1>
                <button className="p-2 rounded-lg bg-blue-600 text-white hover:opacity-60">
                    <Link to='/admin/collection/add'>Create</Link>
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                    <div className="">
                        <img src={MusicImage} alt=""/>
                        <h2 className='font-bold text-center'>My Collection</h2>
                        <p className='text-center my-2'>Mô tả</p>
                    </div>
                    <div className="">
                        <img src={MusicImage}  alt="" />
                        <h2 className='font-bold text-center'>My Collection</h2>
                        <p className='text-center my-2'>Mô tả</p>
                    </div>
                    <div className="">
                        <img src={MusicImage}  alt="" />
                        <h2 className='font-bold text-center'>My Collection</h2>
                        <p className='text-center my-2'>Mô tả</p>
                    </div>
                    <div className="">
                        <img src={MusicImage}  alt="" />
                        <h2 className='font-bold text-center'>My Collection</h2>
                        <p className='text-center my-2'>Mô tả</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CollectionList
