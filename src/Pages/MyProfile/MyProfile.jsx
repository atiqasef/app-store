import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="card bg-base-100 max-w-md mx-auto shadow-xl">
        <div className="card-body items-center text-center">
          
         
          <img
            src={user.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
            alt="profile"
            className="w-24 h-24 rounded-full border"
          />

          <h2 className="card-title mt-4">
            {user.displayName || 'No Name'}
          </h2>

       
          <p className="text-gray-600">{user.email}</p>

         

        </div>
      </div>
    </div>
  );
}
