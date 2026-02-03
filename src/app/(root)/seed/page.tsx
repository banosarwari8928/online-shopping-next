import React from 'react'
import sampleData from '@/db/data'
import { prisma } from '@/lib/db/lib'
async function seed() {
    await prisma.product.deleteMany();
    await prisma.product.createMany({data:sampleData.products});
    console.log("seeded successfully");
  return (
    <div>seeding the Data into Database</div>
  )
}

export default seed