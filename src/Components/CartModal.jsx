import React from 'react'
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid'

const CartModal = ({cartItems,closeModal,deleteItem}) => {
  if(cartItems.length){
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg md:p-5 sm:p-3 xss:p-2 md:w-1/2 sm:w-2/3 xss:w-11/12">
          <h2 className="text-lg font-bold">Cart List</h2>
          <ul className="mt-3 lg:max-h-80 sm:max-h-64 xss:max-h-32 overflow-y-auto">
            {cartItems.map((element,index) => (
              <li key={index} className="py-2 border-b">
                <div className="flex justify-between px-1">
                  <h3 className='flex md:w-3/4 xss:w-2/3 sm:text-sm xss:text-xs items-center'>{element.title}</h3>
                  <div className="flex justify-around md:w-1/4 xss:w-1/3">
                    <h5 className='flex items-center sm:text-sm xss:text-xs w-3/4'>    
                      <CurrencyRupeeIcon className="size-6 text-amber-600 pr-[2px]" />
                      {element.price}
                    </h5>
                    <div className='w-1/4'>
                      <button className='sm:px-2 sm:py-2 xss:px-1 xss:py-1 border border-red-500 rounded-lg text-red-500'
                      onClick={()=>deleteItem(element.id)}
                      ><TrashIcon className="md:size-6 sm:size-5  xss:size-4"/></button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={closeModal} className="mt-4 sm:px-3 sm:py-2 xss:px-2 xss:py-1 sm:text-sm xss:text-xs bg-emerald-200 rounded-lg">
            Close
          </button>
        </div>
      </div>
    )
  }else{
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-5 w-1/2">
          <h2 className="text-lg font-bold">Your Cart is Empty</h2>
          <button onClick={closeModal} className="mt-4 px-3 py-2 bg-emerald-200 rounded-lg">
            Close
          </button>
        </div>
      </div>
    )
  }
  
}

export default CartModal
