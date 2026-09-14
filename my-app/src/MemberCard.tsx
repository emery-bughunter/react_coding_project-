// Author: Igor Noel  — tasks 10–20: reusable typed MemberCard component

// Author: Betelhem Feleke Chelebo — tasks 21–28

import "./MemberCard.css";

interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

function MemberCard({
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
}: MemberCardProps) {
  return (
    <div className="member-card team-member">
      <h3 className="member-name">{name}</h3>

      <p className="member-role">Role: {role}</p>

      <p className="member-tasks" style={{ fontWeight: "bold" }}>
        Tasks completed: {tasksCompleted}
      </p>

      <p className={isActive ? "status active" : "status inactive"}>
        Status: {isActive ? "Active" : "Inactive"}
      </p>

      {bio && <p className="member-bio">Bio: {bio}</p>}
    </div>
  );
}

export default MemberCard;