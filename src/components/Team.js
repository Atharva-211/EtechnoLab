import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Architect Name",
    designation: "Designation",
    image: "img/team-1.jpg",
  },
  // Add more team members here if needed
];

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h4 className="text-primary font-semibold">Team Members</h4>
          <h1 className="text-3xl font-bold">
            We Are Creative Architecture Team For Your Dream Home
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <span className="text-primary">{member.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
