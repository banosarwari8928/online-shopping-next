import React from 'react'
import sampleData from '@/db/data'
import { prisma } from '@/lib/db/lib'
async function Seed() {
    await prisma.product.deleteMany();
    await prisma.product.createMany({data:sampleData.products});
    console.log("seeded");

  return (
    <div>
        Seeding Data 
    </div>
  )
}
 
export default Seed