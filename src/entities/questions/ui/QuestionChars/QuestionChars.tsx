import "./QuestionChars.scss";
import UiTag from "@/shared/ui/UiTag/UiTag.tsx";
import UiSelectItem from "@/shared/ui/UiSelectItem/UiSelectItem.tsx";
import { ISkill } from "@/entities/skills";

interface PropsQuestionChars {
  complexity: number;
  rate: number;
  skills: ISkill[];
  keywords: string[];
}

const QuestionChars = ({ complexity, rate, skills, keywords }: PropsQuestionChars) => {
  return (
    <div className="questions-chars">
      <div className="questions-chars__inner">
        <div className="questions-chars__level">
          <div className="questions-chars__level-label">Уровень:</div>
          <div className="questions-chars__tags">
            <UiTag label="Cложность" value={complexity} />
            <UiTag label="Рейтинг" value={rate} />
          </div>
        </div>

        <div className="questions-chars__skills">
          <div className="questions-chars__skills-label">Навыки:</div>
          <div className="questions-chars__skills-items">
            {skills.map((skill) => (
              <div key={skill.id}>
                <UiSelectItem id={skill.id} title={skill.title} selected={true} />
              </div>
            ))}
          </div>
        </div>

        <div className="questions-chars__keywords">
          <div className="questions-chars__keywords-label">Ключевые слова:</div>
          <div className="questions-chars__keywords-list">
            {keywords.map((keyword) => (
              <div className="questions-chars__keyword" key={keyword}>{`#${keyword}`}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionChars;
