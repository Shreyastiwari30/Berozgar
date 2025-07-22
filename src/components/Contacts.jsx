import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-100 to-white px-4 py-20 flex flex-col items-center">
      
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
        Get in Touch with Us
      </h1>
      <p className="text-gray-600 max-w-xl text-center mb-10">
        Have questions, feedback, or want to partner with us? Fill out the form below and we’ll get back to you soon.
      </p>

     
      <form className="w-full max-w-lg bg-white p-8 shadow-md rounded-xl space-y-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>

     
      <div className="mt-16 text-center text-gray-700 space-y-2">
        <p><strong>Email:</strong> support@berozgaar.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Indore, Madhya Pradesh, India</p>
      </div>
    </div>
    </div>
  )
}

export default Contacts;