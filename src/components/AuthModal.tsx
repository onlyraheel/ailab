import React, { useState } from 'react';
import { User } from '../types';
import { db } from '../firebase'; // Import the database connection
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Import Firestore functions

interface AuthModalProps {
  onLogin: (user: User) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      // Create the user data object
      const userData = { name, email, phone };
      
      // Add a new document with a generated ID to the "leads" collection
      const docRef = await addDoc(collection(db, "leads"), {
        ...userData,
        createdAt: serverTimestamp() // Add a server timestamp for when the lead was created
      });

      console.log("Lead successfully written with ID: ", docRef.id);

      // Once the lead is saved, log the user into the app
      onLogin(userData);

    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Could not save lead. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-lynx-gray rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
      <h2 className="text-3xl font-bold text-center text-white mb-2">Welcome to AI Lab</h2>
      <p className="text-center text-gray-400 mb-6">Sign up to access our powerful AI tools.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full bg-lynx-light-gray border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-lynx-blue focus:border-lynx-blue"
            placeholder="John Doe"
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full bg-lynx-light-gray border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-lynx-blue focus:border-lynx-blue"
            placeholder="you@example.com"
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full bg-lynx-light-gray border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-lynx-blue focus:border-lynx-blue"
            placeholder="+1 (555) 123-4567"
            disabled={isLoading}
          />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lynx-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lynx-blue focus:ring-offset-lynx-dark transition-colors duration-300 disabled:bg-lynx-light-gray disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Access Tools'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthModal;
