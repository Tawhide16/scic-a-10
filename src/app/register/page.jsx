"use client";

import RegisterFrom from "./Components/RegisterFrom";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Create an Account
        </h2>

        <RegisterFrom></RegisterFrom>
      </div>
    </div>
  );
}
