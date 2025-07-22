import React from "react";

const tasks = [
  {
    id: 1,
    tag: "Home Repair",
    tagColor: "bg-orange-100 text-orange-600",
    title: "Fix Electric Switch in Livin Room",
    location: "Vijay Nagar, Indore",
    price: "₹200 – 4000",
  },
  {
    id: 2,
    tag: "Tutoring",
    tagColor: "bg-purple-100 text-purple-600",
    title: "Need Help with Math Assignment",
    location: "Mahalakshmi Nagar, Indore",
    price: "₹500 – 8000",
  },
  {
    id: 3,
    tag: "Delivery",
    tagColor: "bg-blue-100 text-blue-600",
    title: "Delivery of Documents to MG Road",
    location: "Rajwada, Indore",
    date: "11 day ago",
  },
  {
    id: 4,
    tag: "Cleaning",
    tagColor: "bg-green-100 text-green-600",
    title: "Clean Water Tank on Terrace",
    location: "Sudama Nagar, Indore",
    price: "₹500 – 700",
  },
];

export default function Tasks() {
  return (
    <section className="px-4 md:px-10 py-10 bg-gradient-to-br from-purple-200 via-blue-100 to-white">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Tasks</h2>

     
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select className="px-4 py-2 rounded-full bg-white border text-sm shadow-sm">
          <option>Indore..</option>
        </select>
        <select className="px-4 py-2 rounded-full bg-white border text-sm shadow-sm">
          <option>Category...</option>
        </select>
        <select className="px-4 py-2 rounded-full bg-white border text-sm shadow-sm">
          <option>Sort by: Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-xl border hover:shadow-md transition"
          >
           
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${task.tagColor}`}
            >
              {task.tag}
            </span>

            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {task.title}
            </h3>

            
            <p className="text-sm text-gray-600 mt-1">📍 {task.location}</p>

            
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-gray-800 font-medium">
                {task.price || task.date}
              </p>
              <button className="px-4 py-1 border rounded-full text-sm hover:bg-gray-100">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex items-center justify-center gap-3 mt-10 text-sm">
        <button className="text-gray-500 hover:text-black">← Previous</button>
        <button className="w-7 h-7 rounded-full bg-blue-700 text-white">1</button>
        <button className="text-gray-600 hover:text-black">2</button>
        <button className="text-gray-600 hover:text-black">3</button>
        <button className="text-gray-500 hover:text-black">Next →</button>
      </div>
    </section>
  );
}
