"use client";

import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";

export default function LogoutButton() {
    const { user } = useAuth();
    if (!user) {
        return <></>;
    }
    return (
        <button
            onClick={async () => {
                if (!confirm("Are you sure?")) return;
                try {
                    await toast.promise(signOut(auth), {
                        error: (e) => e?.message,
                        loading: "Loading...",
                        success: "Successfully Logged out",
                    });
                } catch (error) {
                    toast.error(error?.message);
                }
            }}
            className="text-white bg-red-500 hover:bg-red-700 transition-all duration-200 md:px-4 md:py-2 px-3 py-1.5 md:ml-4 ml-2 md:text-sm text-xs rounded-full flex gap-1.5 items-center"
        >
            <LogOut size={12} className="block sm:hidden text-white" />
            <LogOut size={16} className="hidden sm:block text-white" />
            <div className="">Logout</div>
        </button>
    );
}