
import Link from "next/link";
// import FavoriteButton from "./FavoriteButton";
import AuthContextProvider from "@/contexts/AuthContext";
// import AddToCartButton from "./AddToCartButton";
// import { getProductReviewCounts } from "@/lib/firestore/products/count/read";
// import { Suspense } from "react";
// import MyRating from "./MyRating";
import { Heart } from "lucide-react";

export default function ProductsGridView({ products }) {
    return (
        <section className="w-full flex justify-center">
            <div className="flex flex-col gap-5 lg:w-[80%] md:w-[90%] w-[95%] p-5">
                <h1 className="text-center font-semibold text-lg">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                    {products?.map((item) => {
                        return <ProductCard product={item} key={item?.id} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export function ProductCard({ product }) {
    return (
        <div className="flex flex-col gap-3 border p-4 rounded-lg">
            <div className="relative w-full">
                <Link href={`/products/${product?.id}`}>
                    <img
                        src={product?.featureImageURL}
                        className="rounded-lg h-48 w-full object-contain"
                        alt={product?.title}
                    />
                </Link>
                <div className="absolute top-1 right-1 z-10">
                    <AuthContextProvider>
                        {/* <FavoriteButton productId={product?.id} /> */}
                        <button className="text-pink-600 text-xs md:text-sm px-4 py-1.5 rounded-lg">
                            <Heart />
                        </button>
                    </AuthContextProvider>
                </div>
            </div>
            <Link href={`/products/${product?.id}`}>
                <h1 className="font-semibold line-clamp-2 text-sm">{product?.title}</h1>
            </Link>
            <div className="">
                <h2 className="text-green-500 text-sm font-semibold">
                    ₹ {product?.salePrice}{" "}
                    <span className="line-through text-xs text-gray-600">
                        ₹ {product?.price}
                    </span>
                </h2>
            </div>
            <p className="text-xs text-gray-500 line-clamp-2">
                {product?.shortDescription}
            </p>
            {/* <Suspense>
                <RatingReview product={product} />
            </Suspense> */}
            {product?.stock <= (product?.orders ?? 0) && (
                <div className="flex">
                    <h3 className="text-red-500 rounded-lg text-xs font-semibold">
                        Out Of Stock
                    </h3>
                </div>
            )}
            <div className="flex items-center gap-4 w-full">
                <div className="w-full">
                    <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
                        <button className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg text-xs w-full">
                            Buy Now
                        </button>
                    </Link>
                </div>
                <AuthContextProvider>
                    {/* <AddToCartButton productId={product?.id} /> */}
                    <button className="border-2 border-red-600 text-red-600 text-xs md:text-sm px-2 w-full py-1.5 rounded-lg">
                        Add to Cart
                    </button>
                </AuthContextProvider>
            </div>
        </div>
    );
}

// async function RatingReview({ product }) {
//     const counts = await getProductReviewCounts({ productId: product?.id });
//     return (
//         <div className="flex gap-3 items-center">
//             <MyRating value={counts?.averageRating ?? 0} />
//             <h1 className="text-xs text-gray-400">
//                 <span>{counts?.averageRating?.toFixed(1)}</span> ({counts?.totalReviews}
//                 )
//             </h1>
//         </div>
//     );
// }