import React from 'react'
import Product from './Product';


function ProductList({data,title,limit}:{data:any,title?:string; limit?:number
}) {
  const limiteData=limit?data.slice(0,4):data;
  return (
    <div>
    <div className='w-full my-10'>
        {title?(
        <h2 className="h2-bold mb-4">
            {title}
        </h2>):""}
    </div>
    {limiteData.lenght> 0?(
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 ">
      {limiteData.map((product:any)=>(
        <Product key={product.slug} >{product.name}</Product>
      ))}
    </div>
    ):(<p>no thing exists</p>)}
    </div>
  )
}

export default ProductList