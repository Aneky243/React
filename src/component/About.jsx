import React from 'react';

function About() {
  return (
    <>
      <div className="pt-24 px-8 pb-16 bg-white min-h-screen text-gray-800 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://www.davaocitydirectory.com/wp-content/uploads/2017/07/davaocentralcollege.jpg" 
            alt="Davao Central College Logo" 
            className="w-40 h-auto object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">About Us</h1>

        {/* Vision & Mission */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">Vision, Mission & Goals</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <img 
              src="https://dcc.edu.ph/wp-content/uploads/2021/10/VMG.png" 
              alt="DCC Vision and Mission" 
              className="w-full md:w-1/2 rounded shadow-lg"
            />
            <div className="text-lg leading-relaxed md:w-1/2">
              <p><strong>Vision:</strong> To be a center of excellence in education committed to producing globally competitive and value-driven graduates.</p>
              <p className="mt-4"><strong>Mission:</strong> DCC is committed to providing quality, affordable, and transformative education rooted in Christian values and responsive to the needs of society.</p>
              <p className="mt-4"><strong>Goals:</strong> To develop competent, responsible, and ethical individuals who contribute positively to national development.</p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">History</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            Davao Central College, Inc. (DCCI) like many other institutions has had its share of successes and defeats. It opened its doors in 1948 when the war had just ended. It was then called Davao Central Institute (DCI), the first high school established in Toril “with no more than 76 enrollees” from First Year to Fourth Year during its opening.

            {"\n\n"}Mr. Salustiano Advincula, a dynamic Christian leader whose vision and passion for the education of the youth was inspired by the worldwide “Each one, teach one” program of Dr. Frank C. Laubach, set the mode of school life in DCI. Mr. Advincula thought of the economically challenged when he began this mission with a group of friends. He used to lament, “It is very difficult for a poor man’s son to get an education!” Thus, educating the youth became a passion for him as he was also a product of someone’s benevolence — when as a teenager he worked for Dr.Laubach, a Christian missionary in Lanao.

            {"\n\n"}The need for a high school in Toril after World War II encouraged Mr. Advincula to embark on the project here.. Thus, DCI was born. DCI took upon itself the challenge of becoming an agent of change in the community. It became a school “where character is emulated, democracy is emphasized and patriotism is emblazoned.” It adopted the motto- Live, Love, Light- an inspiration of the Life Who is Love and Light. And although it is a non-sectarian school, DCI adopted the teachings of Jesus Christ as value content for teaching.

            {"\n\n"}When it started, DCI occupied a multi-room house leased from Zosima Gross and in 1950 DCI transferred to its new six-room, two-storey building in a two-hectare lot owned by Mr.& Mrs. Eustaquio Desabilla. But fire struck on the midnight of June 10, 1959 which turned everything to ashes. With the school ran like an apostolic mission, finance was very low especially that it was a student-revenue dependent. Enrolment significantly declined. Mr. Advincula’s friends gave up on the school. Despite the discouraging intervention, Mr. Advincula could not allow DCI to be lost to oblivion. His passion for the “poor but deserving students” was unstoppable. The Bureau of Private Schools ordered DCI to cease and desist operation because of unsatisfactory facilities after the fire. But a new Government Recognition was awarded DCI in 1965.

            {"\n\n"}In 1967, the College of Liberal Arts started and in the year that followed, the name “Davao Central Institute” became “Davao Central College”. The Evening High School was also awarded its Government Recognition in 1968.

            {"\n\n"}A new two-storey building was completed in 1970 to replace the classrooms made from salvaged materials from the fire that included log cores, slabs, and veneer plywood from donations which were hurriedly set up to house the enrolment after the fire in 1959.

            {"\n\n"}Since then, DCC began its steady climb to making itself relevant to the educational requirements of the community — always conscious of delivering quality education for all.

            {"\n\n"}After being hit by two fires in 1959 and 1991, DCC now stands proudly as an accredited institution envisioning empowered individuals imbued with Christian ideals for service. This is DCC’s humble proposition for responsible individuals aspiring to assume leadership roles in the future.

            {"\n\n"}When the school ended its first 50 years of corporate life in 2000, it now carried the name of DAVAO CENTRAL COLLEGE, INC. (DCCI). It added to its program the Sunday High School which got its Government Recognition in 2007. DCC recommitted its vision coupled with a faith in a merciful God whose love enabled DCC to rise from the ashes in order to be where it is now.

            {"\n\n"}With the management ever concerned of global competitiveness, instruction improvements were being seriously undertaken regularly. Sturdy buildings and modern facilities had been installed over time, as well as the induction of a research track and extension service activities. New programs were being added as necessary. All these and the cooperation of teaching and non-teaching personnel and the management’s full support with the Board of Directors paved the way for DCC to be in the ranks of institutions with accredited programs by the Federation of Accrediting Agencies of the Philippines (FAAP) through the Association of Christian Schools, Colleges and Universities Accrediting Council Inc. (ACSCU-ACI).
          </p>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-3xl font-semibold text-green-800 mb-6">Philosophy of Education</h2>
          <p className="text-lg leading-relaxed">
            Davao Central College believes that man is matter and spirit-breathed of God; therefore, his education must competently and sufficiently prepare him for life and the life hereafter.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
