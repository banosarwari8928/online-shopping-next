// import { div } from "framer-motion/client";
import Product from "@/components/shared/Products/Product";
import ProductList from "@/components/shared/Products/productList";
import { Button } from "@/components/ui/button";
import sampleData from "@/db/data";
import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div> 
    <ProductList data={sampleData.products} title="Newest Arrivel" limit={4} />
    </div>
  );
  // route nav, footer
}
