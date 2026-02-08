"use client"; // to make this component client side
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
// import { axios } from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // console.log("User data: ", user);

  const onSignup = async () => {
    try {
      const response: any = await axios.post("/api/users/signup", user);
      console.log("Signup success: ", response.data);
      toast.success(response.message);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed ", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex  items-center justify-center ">
      <div className="flex flex-col space-y-4 bg-white text-black  w-72 h-80 p-4 justify-center rounded-xl">
        <h1>Signup</h1>
        <input
          className="border border-gray-400  rounded p-1"
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />

        <input
          className="border border-gray-400  rounded p-1 "
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
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
          className="bg-blue-500 text-white text-lg py-1 px-3 rounded hover:bg-blue-600 active:bg-blue-500  cursor-pointer"
          onClick={onSignup}
        >
          Signup
        </button>

        <Link
          className=" text-sm hover:underline text-blue-500 hover:text-blue-600 mx-auto"
          href="/login"
        >
          Already registered? Login
        </Link>
      </div>
    </div>
  );
}
