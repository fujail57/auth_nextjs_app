"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <h1>Profile page</h1>
      <hr />
      <p>This is profile page</p>
      <hr />
      <hr />
      <button
        onClick={logout}
        className="bg-white text-black border-2 border-red-500 rounded-xl px-3 py-1 m-40"
      >
        Logout
      </button>
    </div>
  );
}
