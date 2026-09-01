const team = [
  { seed: 1, name: "Team Member 1", role: "Role Title" },
  { seed: 2, name: "Team Member 2", role: "Role Title" },
  { seed: 3, name: "Team Member 3", role: "Role Title" },
  { seed: 4, name: "Team Member 4", role: "Role Title" },
  { seed: 5, name: "Team Member 5", role: "Role Title" },
  { seed: 6, name: "Team Member 6", role: "Role Title" },
  { seed: 7, name: "Team Member 7", role: "Role Title" },
];

const CONDENSED_COUNT = 3;

const MeetTheTeam = ({ condensed = false }) => {
  const members = condensed ? team.slice(0, CONDENSED_COUNT) : team;

  return (
    <section className={`photo-grid${condensed ? " photo-grid-condensed" : ""}`}>
      {members.map(({ seed, name, role }) => (
        <div key={seed} className="photo-placeholder">
          <p className="photo-placeholder-name">{name}</p>
          <p className="photo-placeholder-role">{role}</p>
        </div>
      ))}
    </section>
  );
};

export default MeetTheTeam;
