// /auth/login/components/LoginForm.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await signIn("credentials", {
      username: name,
      password,
      redirect: false,
    });

    if (res?.ok) {
      console.log("Login successful", res);
      setError("");
      router.push("/dashboard"); // or wherever you want to go after login
    } else {
      setError("Invalid username or password");
      console.log(error)
    }
  };

  return (
    <div className="w-[400px] h-[350px] bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">
          Login
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Username
          </label>
          <input
            id="name"
            type="name"
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-black"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <label className="flex items-center text-sm text-gray">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            Remember Me
          </label>
          <a href="#" className="text-sm text-blue hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      <button
        className="w-full py-2 bg-greenSP text-white rounded-md transition hover:font-semibold"
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </div>
  );
}
