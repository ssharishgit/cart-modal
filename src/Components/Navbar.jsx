import React from 'react'
import { CircleStackIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = ({itemsCount,openModal}) => {
  return (
    <div className='flex justify-between bg-emerald-100 py-6 px-8 text-black'>
      <CircleStackIcon className="size-8" />
      <h1 className='sm:text-2xl xs:text-lg xss:text-sm font-semibold'>Simply Shopping</h1>
      <button className='relative'
      onClick={()=>openModal()}
      >
        <ShoppingCartIcon className="size-8" />
        <span className="absolute top-0 right-0 -mr-2 -mt-2 inline-flex items-center justify-center w-5 h-5 
        bg-amber-400 text-black text-xs font-medium rounded-full">
          {itemsCount}
        </span>
      </button>
    </div>
  )
}

export default Navbar
