import React from 'react';

function Admission() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img 
          src="https://www.davaocitydirectory.com/wp-content/uploads/2017/07/davaocentralcollege.jpg" 
          alt="Davao Central College Logo" 
          className="h-24 object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-green-900">Admission Requirements</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">College (Freshmen)</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Original REPORT CARD (SF 9)</li>
          <li>Original and photo copy of Birth Certificate (PSA/NSO Authenticated)</li>
          <li>Certificate of good moral character (Signed by the Guidance Counselor/Principal)</li>
          <li>2 pcs. passport size picture</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">College (Transferees)</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Transcript of Record (TOR)</li>
          <li>Honorable Dismissal</li>
          <li>Original and photo copy of Birth Certificate (PSA/NSO Authenticated)</li>
          <li>2 pcs. passport size picture</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Enroll Now</h2>
        <p className="text-lg mb-3">On-Campus Enrollment</p>
        <p className="text-lg">Get in touch with us!</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">School Hours</h2>
        <p className="text-lg">Monday to Friday</p>
        <p className="text-lg mb-3">8:00 AM to 5:00 PM</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
        <p className="text-lg">Tel. No.</p>
        <ul className="list-disc list-inside space-y-1 text-lg mb-3">
          <li>(082) 291-1882</li>
          <li>(082) 296-9992</li>
        </ul>
        <p className="text-lg">
          Email: <a href="mailto:davaocentralcollege2011@gmail.com" className="text-green-700 underline">davaocentralcollege2011@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default Admission;
