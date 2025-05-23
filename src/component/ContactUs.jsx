import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 text-gray-800">
      {/* DCC Logo */}
       <div className="flex justify-center mb-8">
          <img 
            src="https://www.davaocitydirectory.com/wp-content/uploads/2017/07/davaocentralcollege.jpg" 
            alt="Davao Central College Logo" 
            className="w-40 h-auto object-contain"
          />
        </div>
      <div className="flex justify-center mb-10">
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-2xl mx-auto text-lg space-y-6">
        <div>
          <p><span className="font-semibold">School Hours:</span></p>
          <p>Monday to Friday</p>
          <p>8:00 AM to 5:00 PM</p>
        </div>

        <div>
          <p><span className="font-semibold">Telephone Numbers:</span></p>
          <p>(082) 291-1882</p>
          <p>(082) 296-9992</p>
        </div>

        <div>
          <p><span className="font-semibold">Email:</span></p>
          <p>davaocentralcollege2011@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;