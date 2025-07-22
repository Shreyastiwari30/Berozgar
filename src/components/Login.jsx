import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-white">
      <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl px-10 py-8 w-full max-w-sm text-center">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Sign In to Berozgaar</h2>

        <form className="space-y-4">
          <div className="text-left">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="mt-1 w-full px-4 py-2 rounded-md bg-purple-900 text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          <div className="text-left">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="pass@123"
              className="mt-1 w-full px-4 py-2 rounded-md bg-purple-900 text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-gray-100 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-400" />
          <span className="px-2 text-gray-600 text-sm">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex justify-between gap-3">
          <button className="flex-1 bg-black text-white py-2 rounded-full flex items-center justify-center gap-2">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="G" />
            Google
          </button>
          <button className="flex-1 bg-blue-800 text-white py-2 rounded-full flex items-center justify-center gap-2">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png" alt="in" />
            LinkedIn
          </button>
        </div>

        <div className="mr-7 text-xs mt-6 flex justify-center gap-5 text-gray-500">
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>

        <p className="mt-4 text-[11px] text-gray-600 font-semibold">
          © 2025 Berozgaar.com. All rights reserved.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login
