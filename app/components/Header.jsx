import { Heart, Search, ShoppingCart, UserCircle2 } from "lucide-react";
import Link from "next/link";
// import LogoutButton from "./LogoutButton";
// import AuthContextProvider from "@/contexts/AuthContext";
// import HeaderClientButtons from "./HeaderClientButtons";
// import AdminButton from "./AdminButton";

export default function Header() {
    const menuList = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about-us",
        },
        {
            name: "Contact",
            link: "/contact-us",
        },
    ];
    return (
        <nav className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 border-b flex items-center justify-between">
            <Link href={"/"} className="flex flex-row items-center justify-center gap-2 lg:gap-4 text-red-600 font-bold">
                <img className="h-6 md:h-8 lg:h-10" src="/logo.png" alt="Cartify" />
                <div className="hidden md:block md:text-xl lg:text-2xl">
                    Cartify
                </div>
            </Link>

            <div className="hidden md:flex gap-2 items-center font-semibold">
                {menuList?.map((item) => {
                    return (
                        <Link href={item?.link}>
                            <button className="text-base px-4 py-2 rounded-lg hover:text-red-600 hover:bg-gray-50">
                                {item?.name}
                            </button>
                        </Link>
                    );
                })}
            </div>
            <div className="flex items-center gap-1">
                {/* <AuthContextProvider>
                       <AdminButton />
                    </AuthContextProvider> */}
                <Link href={`/search`}>
                    <button
                        title="Search Products"
                        className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50 hover:text-red-600"
                    >
                        <Search size={20} />
                    </button>
                </Link>
                {/* <AuthContextProvider>
                       <HeaderClientButtons />
                    </AuthContextProvider> */}
                <Link href={`/account`}>
                    <button
                        title="My Account"
                        className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50 hover:text-red-600"
                    >
                        <UserCircle2 size={20} />
                    </button>
                </Link>
                {/* <AuthContextProvider>
                        <LogoutButton />
                    </AuthContextProvider> */}
            </div>
        </nav>
    );
}