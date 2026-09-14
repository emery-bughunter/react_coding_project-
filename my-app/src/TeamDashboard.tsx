// Agertu Diriba
// Author: Chiagbanweghi Moses Peter — tasks 8–10: JSX content, Fragment, MemberCard
// Author: Igor Noel — tasks 10–20: reusable typed MemberCard component
// Author: Betelhem Feleke Chelebo — tasks 21–30: styling and responsive dashboard
// Author :emery Barame -task 31-40 :React State, Events, and Forms with TypeScrip
import React, { useState } from "react";
import MemberCard from "./MemberCard";
import "./TeamDashboard.css";

interface TeamMember {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

const members: TeamMember[] = [
  {
    name: "Amina Yusuf",
    role: "Frontend Developer",
    tasksCompleted: 12,
    isActive: true,
    bio: "Builds accessible and responsive interfaces.",
  },
  {
    name: "Daniel Chen",
    role: "Backend Developer",
    tasksCompleted: 9,
    isActive: false,
  },
  {
    name: "Sofia Martin",
    role: "Product Designer",
    tasksCompleted: 15,
    isActive: true,
    bio: "Turns team ideas into clear user experiences.",
  },
];

function TeamDashboard() {
  // 1. useState Hook (Typed): numeric state variable named teamScore
  const [teamScore, setTeamScore] = useState<number>(0);

  // 6. String State: state variable to store a new member's name
  const [newMemberName, setNewMemberName] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");

  // 3 & 4. Update State & Functional Updates (Increase teamScore by 1)
  const handleIncrease = () => {
    setTeamScore((prevScore) => prevScore + 1);
  };

  // 5. Decrease State (not below 0)
  const handleDecrease = () => {
    setTeamScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
  };

  // 8. Change Event (Typed)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(e.target.value);
  };

  // 9 & 10. Form Submission (Typed), prevent default, use input
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted member name:", newMemberName);
    setSubmittedName(newMemberName);
    setNewMemberName("");
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Team Dashboard</h1>

      <p className="dashboard-description">
        This group application helps our team track members, roles, and
        completed tasks in one place.
      </p>

      {/* Team Score Section (Tasks 1 - 5) */}
      <div className="score-section" style={{ margin: "20px 0", padding: "15px", background: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
        <h2>Team Score: {teamScore}</h2>
        <button onClick={handleIncrease} style={{ marginRight: "10px", padding: "8px 12px" }}>
          Increase Score (+1)
        </button>
        <button onClick={handleDecrease} style={{ padding: "8px 12px" }}>
          Decrease Score (-1)
        </button>
      </div>

      {/* Add Member Form Section (Tasks 6 - 10) */}
      <div className="form-section" style={{ margin: "20px 0", padding: "15px", background: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
        <h3>Add New Team Member</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="memberName" style={{ marginRight: "10px" }}>Member Name: </label>
            <input
              id="memberName"
              type="text"
              value={newMemberName}
              onChange={handleNameChange}
              placeholder="Enter member name"
              style={{ padding: "6px" }}
            />
          </div>
          <button type="submit" style={{ padding: "8px 14px" }}>
            Add Member
          </button>
        </form>
        {submittedName && (
          <p style={{ marginTop: "10px" }}>
            Last submitted member name: <strong>{submittedName}</strong>
          </p>
        )}
      </div>

      <div className="member-grid">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

export default TeamDashboard;