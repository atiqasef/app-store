import React from "react";
import { Helmet } from "react-helmet";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "How to Choose the Right App for Your Needs",
      description:
        "Learn how to identify the best apps based on ratings, reviews, and real user experience.",
      author: "AppStore Team",
      date: "March 12, 2026"
    },
    {
      id: 2,
      title: "Why User Reviews Matter in an App Store",
      description:
        "User reviews help others make informed decisions and improve app quality.",
      author: "Admin",
      date: "March 10, 2026"
    },
    {
      id: 3,
      title: "Top Productivity Apps to Boost Your Daily Workflow",
      description:
        "Discover productivity apps that help you manage tasks, notes, and time efficiently.",
      author: "Productivity Expert",
      date: "March 8, 2026"
    },
    {
      id: 4,
      title: "Gaming Apps: Safety Tips for Players",
      description:
        "Important safety and privacy tips every gamer should know before installing apps.",
      author: "Gaming Hub",
      date: "March 5, 2026"
    },
    {
      id: 5,
      title: "Benefits of Using Education Apps for Learning",
      description:
        "Education apps make learning flexible, interactive, and accessible for everyone.",
      author: "Education Team",
      date: "March 2, 2026"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AppStore | Blog</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          AppStore Blog
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Insights, tips, and guides to help you choose the best apps and
          improve your digital experience.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">
          📚 Latest Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body">
                <h3 className="card-title">
                  {blog.title}
                </h3>

                <p className="text-gray-600">
                  {blog.description}
                </p>

                <div className="text-sm text-gray-500 mt-3">
                  <p>✍ {blog.author}</p>
                  <p>📅 {blog.date}</p>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
