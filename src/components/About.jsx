import React from 'react'

const About = () => {
  return (
    <div>
      <div className="bg-white text-gray-800">
      
      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-white py-16 text-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">About Berozgaar.com</h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Empowering every individual to find work fast — from microtasks to skilled services across Indore and India.
        </p>
      </section>

      
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed max-w-7xl">
          Berozgaar.com is a hyperlocal micro-job platform built for the next billion. Our mission is to reduce unemployment by enabling quick, trusted, and fair work opportunities in your neighborhood. Whether you're a student, freelancer, daily wage earner, or skilled worker, our platform helps you find work instantly.
        </p>
        
      </section>

      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-white py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📍 Local Gigs</h3>
            <p className="text-sm text-gray-600">Get tasks near you – delivery, repair, tutoring, and more.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-2">⚡ Quick Hiring</h3>
            <p className="text-sm text-gray-600">Start working within minutes of getting selected.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🤖 Smart Matching</h3>
            <p className="text-sm text-gray-600">We use AI to match your skills to the best-fit jobs.</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6">Join thousands who are already earning on Berozgaar.com</p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
          Register Now
        </button>
      </section>
    </div>
    </div>
  )
}

export default About
