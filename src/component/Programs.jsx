import React from 'react';

function Programs() {
  return (
    <>
      

      {/* Programs Content */}
      <div className="min-h-screen bg-white p-8 max-w-4xl mx-auto mt-24">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Academic Programs</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Basic Education</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Elementary</li>
            <li>Junior High School</li>
            <li>Senior High School</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Tertiary Education</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Business Administration</li>
            <li>College of Education & Liberal Arts</li>
            <li>Criminal Justice Education</li>
            <li>Hospitality Management</li>
            <li>Information Technology Education</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Programs;
