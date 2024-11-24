import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'

export function ProductCard({id,category,description,image,price,title,rating,addToCart,product}){
  
  return (
    <div className="w-72 border border-neutral-400 rounded-md px-1 py-2">
      <img src={image} alt="" className="h-60 w-72 p-4" />
      <h3 className='text-lg my-2'>
        {(title.length<25)?title:(title.substring(0,25)+"...")}
      </h3>
      
      <div className="flex justify-between px-1">

        <h5 className='flex items-center'>    
          <CurrencyRupeeIcon className="size-6 text-amber-500 pr-[2px]" />
          {price}
        </h5>
        <button className='px-4 py-2 border bg-emerald-100 rounded-lg'
        onClick={()=>addToCart(product)}
        >Add to Cart</button>
      </div>
      
    </div>
  )
}
