import type { Education } from "../types/cv";
import "../styles/generalSection.css";

type EducationSectionProps = {
  education: Education;
  inputChangeHandler: (value: string, fieldName: keyof Education) => void;
};

function EducationSection({ education, inputChangeHandler }: EducationSectionProps) {
  return (
    <fieldset className="general_form">
      <legend>Education</legend>
      <div className="general_form--school">
        <label htmlFor="school">School </label>
        <input
          type="text"
          id="school"
          name="school"
          required
          value={education.school}
          onChange={(e) => inputChangeHandler(e.target.value, "school")}
        />
      </div>
      <div className="general_form--study">
        <label htmlFor="study">Study Title</label>
        <input
          type="text"
          id="study"
          name="studyTitle"
          required
          value={education.studyTitle}
          onChange={(e) => inputChangeHandler(e.target.value, "studyTitle")}
        />
      </div>
      <div className="general_form--date">
        <label htmlFor="study-date">Date of study </label>
        <input
          type="date"
          id="study-date"
          name="studyDate"
          required
          value={education.studyDate}
          onChange={(e) => inputChangeHandler(e.target.value, "studyDate")}
        />
      </div>
    </fieldset>
  );
}

export default EducationSection;
