"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    // console.log("Login button clicked");
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login success: ", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex  items-center justify-center ">
      <div className="flex flex-col justify-center space-y-4 bg-white w-72 h-80 p-4 rounded-xl text-black ">
        <h1>Login</h1>
        <input
          className="border border-gray-400  rounded p-1 "
          type="text"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          className="border border-gray-400  rounded p-1 "
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button
          className="bg-blue-500 text-white  text-lg py-0.5 px-3 rounded hover:bg-blue-600 active:bg-blue-500 cursor-pointer"
          onClick={onLogin}
        >
          Login
        </button>
        <Link
          className="text-sm text-blue-500 hover:underline hover:text-blue-600 mx-auto"
          href="/signup"
        >
          New user? Signup
        </Link>
      </div>
    </div>
  );
}
