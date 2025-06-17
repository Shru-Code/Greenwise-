import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Shruti patel",
      role: "Lead Repair Expert",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFaC7BPkOCk6Q/profile-displayphoto-shrink_400_400/B4EZRHE72nHgAg-/0/1736359265514?e=1755734400&v=beta&t=mGzqqhz30cU6ANlkufPQqQ0pnMWhaDZBYeMOF7vOhks"
    },
    {
      name: " Divija Pilla",
      role: "Community Coordinator",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFMz0oBsuImbQ/profile-displayphoto-shrink_400_400/B4DZRGW1ieHMAg-/0/1736347180398?e=1755734400&v=beta&t=XiiEu7Mk5vU_LF2nwYbwXzB2nnGa1VuTNOkAX2obpYM"
    },
    {
      name: "Yamini Mamidi",
      role: "Community Coordinator",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGFy5oJikjc6A/profile-displayphoto-shrink_100_100/B4DZa6VyWcHAAU-/0/1746882996829?e=1755734400&v=beta&t=-UB8jmlIZ4evYXjMOisJRnxTbmntBhtWnhuDVvvXz8I" },
    {
      name: "Jayshree Kotaru",
      role: "Sustainability Expert",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEcsJjesBcpDw/profile-displayphoto-shrink_400_400/B4EZd8XqAFGwAg-/0/1750138267287?e=1755734400&v=beta&t=g8hOAh14A9C1i2EywFDChI3lfXRu7alQeit-rBRSdhQ" },
    {
      name: "Dharani Vithanala",
      role: "Community Coordinator",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG829m30I6xVg/profile-displayphoto-scale_400_400/B4DZd8ZTXrHkAg-/0/1750138698828?e=1755734400&v=beta&t=DliYmpqGiaqSNjbgg6pJkpzsq6gmFItfU53BF1U2tXo"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 