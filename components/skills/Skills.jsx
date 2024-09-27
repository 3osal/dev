import MainTitle from "../mainTitle/MainTitle"
import { SkillsCard } from "./SkillsCard"
import { SKILLS_DATA } from "./SkillsData"

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-3">
    {SKILLS_DATA.map((item)=> (
        <SkillsCard key={item.id} icon = {item.icon} />
    ))}
</div>
  )
}

export default Skills