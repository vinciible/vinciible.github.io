import Image from "next/image";

const usedSkills = [
  {
    category: "Programming",
    tools: [
      { name: "C++", icon: "cplusplus" },
      { name: "C#", icon: "csharp" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    category: "Game development",
    tools: [
      { name: "Unreal Engine 5", icon: "unrealengine" },
      { name: "Unity", icon: "unity" },
    ],
  },
  {
    category: "Tools",
    tools: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

const learningSkills = [
  {
    category: "Web development",
    tools: [
      { name: "JavaScript", icon: "javascript" },
      { name: "Node.js", icon: "nodejs" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
];

const monochromeIcons = ["unrealengine", "unity", "github"];

function SkillRows({ groups }: { groups: typeof usedSkills }) {
  return (
    <div className="skill-rows">
      {groups.map(({ category, tools }) => (
        <div className="skill-row" key={category}>
          <h4>{category}</h4>
          <ul className="skill-list" aria-label={category}>
            {tools.map(({ name, icon }) => (
              <li className="skill-item" key={icon}>
                <Image
                  src={`/icons/${icon}.svg`}
                  alt=""
                  width={32}
                  height={32}
                  className={icon === "nextjs" ? "skill-icon skill-icon-nextjs" : monochromeIcons.includes(icon) ? "skill-icon skill-icon-monochrome" : "skill-icon"}
                />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills &amp; tools</h2>
      <p className="skills-intro">
        Technologies I’ve worked with, and what I’m exploring next.
      </p>

      <div className="skills-used">
        <h3>Used in projects</h3>
        <SkillRows groups={usedSkills} />
      </div>

      <div className="skills-learning">
        <div className="skills-subheading">
          <h3>Learning &amp; exploring</h3>
          <span className="learning-badge">Currently learning</span>
        </div>
        <p className="skills-intro">
          Building my web development skills through this portfolio.
        </p>
        <SkillRows groups={learningSkills} />
      </div>
    </section>
  );
}
