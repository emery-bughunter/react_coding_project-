// Agertu Diriba
// Author: Chiagbanweghi Moses Peter — tasks 8–10: JSX content, Fragment, MemberCard
// Author: Igor Noel  — tasks 10–20: reusable typed MemberCard component

import MemberCard from "./MemberCard";

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
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>
        This group application helps our team track members, roles, and
        completed tasks in one place.
      </p>
      {members.map((member) => (
        <MemberCard key={member.name} {...member} />
      ))}
    </>
  );
}

export default TeamDashboard;
