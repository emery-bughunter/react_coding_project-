// Author: Igor Noel  — tasks 10–20: reusable typed MemberCard component

// Author: Betelhem Feleke Chelebo — tasks 21–28
// Author: Matthew Ainomugisha — tasks 41–50: callback props and member actions

import "./MemberCard.css";

interface MemberCardProps {
  id: number;
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
  onRemove: (memberId: number) => void;
  onToggleStatus: (memberId: number) => void;
}

function MemberCard({
  id,
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
  onRemove,
  onToggleStatus,
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

      <div className="member-actions">
        <button type="button" onClick={() => onToggleStatus(id)}>
          Mark {isActive ? "Inactive" : "Active"}
        </button>
        <button type="button" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default MemberCard;