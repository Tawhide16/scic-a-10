"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegisterFrom() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess("");
    try {
      // Server action call
      await registerUser(data); 
      setSuccess("🎉 Registration successful!");
    } catch (err) {
      console.error(err);
      setSuccess("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
        className="border p-2 rounded w-full"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        className="border p-2 rounded w-full"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        className="border p-2 rounded w-full"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Registering..." : "Register"}
      </button>

      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
}
