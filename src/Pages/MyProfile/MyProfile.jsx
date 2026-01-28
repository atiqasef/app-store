import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Navbar from '../../Components/Header/Navbar';

export default function MyProfile() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    })
      .then(() => {
        alert('Profile updated successfully!');
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert('Error updating profile.');
        setLoading(false);
      });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto mt-10">

      <div className="card bg-base-100 shadow-xl max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-5 text-center">My Profile</h1>

        <div className="flex flex-col items-center mb-5">
          <img
            src={user.photoURL || 'https://i.ibb.co/3y6vB7v/default-avatar.png'}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-3"
          />
          <p className="font-semibold">{user.email}</p>
           <p className="font-semibold">{user.displayName}</p>
        </div>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Profile Photo URL"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary mt-4 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}
