// Agertu Diriba
// Author: Chiagbanweghi Moses Peter — tasks 8–10: JSX content, Fragment, MemberCard

import MemberCard from "./MemberCard";

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>
        This group application helps our team track members, roles, and
        completed tasks in one place.
      </p>
      <MemberCard />
    </>
  );
}

export default TeamDashboard;
