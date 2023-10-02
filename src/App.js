import "./style.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#FF0099",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAF8",
  },
  {
    skill: "Git and GitHub",
    level: "advanced",
    color: "#8AFFA4",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./gandi.jpg" alt="My pic"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Jacek Zielinski</h1>
      <p>
        Junior Front-end Developer. Coding is my big passion.I love to create
        something new.<br></br>I like my family, video games and good music.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "advanced" && " 💪"}</span>
    </div>
  );
}

export default App;
