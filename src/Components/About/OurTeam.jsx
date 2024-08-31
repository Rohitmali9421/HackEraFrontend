import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Prathemesh',
    linkedin: 'https://www.linkedin.com/in/prathemesh',
    twitter: 'https://twitter.com/prathemesh',
    github: 'https://github.com/prathemesh',
  },
  {
    name: 'Sayali',
    linkedin: 'https://www.linkedin.com/in/sayali',
    twitter: 'https://twitter.com/sayali',
    github: 'https://github.com/sayali',
  },
  {
    name: 'Rohit',
    linkedin: 'https://www.linkedin.com/in/rohit',
    twitter: 'https://twitter.com/rohit',
    github: 'https://github.com/rohit',
  },
  {
    name: 'Sami',
    linkedin: 'https://www.linkedin.com/in/sami',
    twitter: 'https://twitter.com/sami',
    github: 'https://github.com/sami',
  },
];

function OurTeam() {
  return (
    <section className="w-full bg-purple-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Our Team</h2>
          <p className="mt-4 text-lg text-gray-700">Meet the amazing team behind our success.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;