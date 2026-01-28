import React from 'react';
import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      
      <h1 className="text-9xl font-bold text-gray-300 mb-5">404</h1>

     
      <p className="text-2xl font-semibold mb-3 text-gray-700">
        Oops! Page not found
      </p>
      <p className="text-gray-500 mb-5 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

     
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>

      
    </div>
  );
}
