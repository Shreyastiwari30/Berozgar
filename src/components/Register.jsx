import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-white px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">Create your account</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Shreyas Tiwari"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="•••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account? <a href="/login" className="text-orange-500 font-semibold hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
