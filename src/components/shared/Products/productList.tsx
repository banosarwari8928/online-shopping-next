import React from 'react'

function ProductList({data,title}:{data:any,title?:string}) {

  return (
    <div>
    <div className='w-full my-10'>
        {title?(
        <h2 className="h2-bold mb-4">
            {title}
        </h2>):""}
    </div>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {data.map((product:any)=>(
        <h1 key={product.slug}>{product.name}</h1>
      ))}
    </div>
    </div>
  )
}

export default ProductList