

import React from 'react';

const WelcomeBanner = () => {
  return (
    <div className="relative bg-slate-300 flex items-start overflow-hidden " >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-300  rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-800 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Welcome Content */}
      <div className="relative z-10 text-center  bg-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500   w-full">
        
        
        <h1 className="text-5xl font-extrabold text-transparent  text-purple-400 pt-3 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-300 mb-6 animate-pulse">
          PrepMate
        </h1>
        
        <p className="text-2xl text-purple-400 font-medium mb-8 leading-relaxed">
          Welcome to your ultimate learning companion
        </p>
        
        <div className="w-full border-t border-gray-800 p-4 mt-6">
          <p className="text-sm text-gray-500 italic">
            Your journey to knowledge begins now
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;