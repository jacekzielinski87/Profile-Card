import "./style.css";

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
      <Skill skill="React" emoji=" 💪" color="#6756DA" />
      <Skill skill="Html + Css" emoji=" 💪" color="#E1BE47" />
      <Skill skill="JavaScript" emoji=" 💪" color="#FFCD94" />
      <Skill skill="Git + Github" emoji=" 💪" color="#900808" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
