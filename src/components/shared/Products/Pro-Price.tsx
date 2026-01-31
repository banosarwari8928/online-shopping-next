import { cn } from '@/lib/utils';
import React from 'react'

function ProductPrice({
    value, className,
}:{value:number;className?:string}) {
    const StringValue= value.toFixed(2);
    const [int,float]= StringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
        <span className='text-xs align-super'>$</span>
        {int}
        <span className='text-xs align-super'>.{float}</span>
    </p>
  );
}

export default ProductPrice