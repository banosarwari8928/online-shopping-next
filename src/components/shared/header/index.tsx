// import { Button } from "@/components/ui/button";/
import { Button } from "@/components/ui/button";
// import { APP_NAME} from "@/lib/constants";
import { APP_NAME } from "../../../lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleTheme from "./toggle-mode";
import Menu from "./menu";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;






// import React from "react";
// import Product from "./product";
// import { ProductInfo } from "@/lib/types/product";

// function ProductList({
//   data,
//   title,
//   limit,
// }: {
//   data: any;
//   data: ProductInfo[];
//   title?: string;
//   limit?: number;
// }) {
//   const limitedData = limit ? data.slice(0, limit) : data;
//   return (
//     <div>
//       <div className="mt-6">
//         {title ? <h2 className="h2-bold mb-4">{title}</h2> : ""}
//       </div>
//       {limitedData.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {limitedData.map((product: any) => (
//             <Product key={product.slug} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p>No product exist</p>
//       )}
//     </div>
//   );
// export type Product = {
// export type ProductInfo = {
//   slug: string;
//   name: string;
//   image: string[];
//   images: string[];
//   stock: number;
//   price: number;
//   rating: number;
//   numReviews: number;
//   description: number;
//   brand: null | string;
//   isFeatured: boolean;
//   category: string;
// };
