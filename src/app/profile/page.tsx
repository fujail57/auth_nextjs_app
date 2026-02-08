"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("Nothing");
  // Handle logout functionality
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

  //  Get user details
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data?.data._id);
  };

  return (
    <div>
      <h1>Profile page</h1>
      <hr />
      <p>This is profile page</p>
      <hr />
      <hr />
      <div>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </div>
      <hr />
      <hr />
      <button
        onClick={logout}
        className="bg-white text-black border-2 border-red-500 rounded-xl px-3 py-1 m-40"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="bg-purple-200 text-black border-2 border-red-500 rounded-xl px-3 py-1 m-40"
      >
        Get user details
      </button>
    </div>
  );
}
