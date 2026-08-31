const team = [
  { seed: 1, name: "Team Member 1", role: "Role Title" },
  { seed: 2, name: "Team Member 2", role: "Role Title" },
  { seed: 3, name: "Team Member 3", role: "Role Title" },
  { seed: 4, name: "Team Member 4", role: "Role Title" },
  { seed: 5, name: "Team Member 5", role: "Role Title" },
  { seed: 6, name: "Team Member 6", role: "Role Title" },
  { seed: 7, name: "Team Member 7", role: "Role Title" },
];

const MeetTheTeam = () => {
  return (
    <section class="photo-grid">
      {team.map(({ seed, name, role }) => (
        <img
          key={seed}
          src={`https://picsum.photos/seed/${seed}/800/600?grayscale`}
          alt={`${role} ${name}`}
          width="100%"
        />
      ))}
    </section>
  );
};

export default MeetTheTeam;
